#include <windows.h>

VOID CreateDetour(PVOID target, PVOID detour, PVOID* trampoline) {
    DWORD oldProtect;
    VirtualProtect(target, 14, PAGE_EXECUTE_READWRITE, &oldProtect);
    
    BYTE jmp[] = { 0xFF, 0x25, 0x00, 0x00, 0x00, 0x00 };
    *(PVOID*)(jmp + 6) = detour;
    memcpy(target, jmp, sizeof(jmp));
    
    VirtualProtect(target, 14, oldProtect, &oldProtect);
}
