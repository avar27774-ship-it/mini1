#include <ntddk.h>

VOID DisableWriteProtection(VOID) {
    ULONG64 cr0 = __readcr0();
    cr0 &= ~0x10000;
    __writecr0(cr0);
}

VOID EnableWriteProtection(VOID) {
    ULONG64 cr0 = __readcr0();
    cr0 |= 0x10000;
    __writecr0(cr0);
}

NTSTATUS PatchMemory(PVOID address, PVOID patch, SIZE_T size) {
    if (!address || !patch || size == 0) return STATUS_INVALID_PARAMETER;
    
    DisableWriteProtection();
    RtlCopyMemory(address, patch, size);
    EnableWriteProtection();
    
    return STATUS_SUCCESS;
}
