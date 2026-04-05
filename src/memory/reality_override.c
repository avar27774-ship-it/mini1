#include <windows.h>

VOID OverrideReality(PVOID address, PVOID value, SIZE_T size) {
    DWORD oldProtect;
    VirtualProtect(address, size, PAGE_READWRITE, &oldProtect);
    memcpy(address, value, size);
    VirtualProtect(address, size, oldProtect, &oldProtect);
}
