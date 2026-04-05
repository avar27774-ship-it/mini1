#include <windows.h>

typedef struct Hook {
    PVOID target;
    PVOID detour;
    BYTE original[16];
    BYTE trampoline[16];
} Hook;

VOID InstallHook(Hook* hook) {
    DWORD oldProtect;
    VirtualProtect(hook->target, 16, PAGE_EXECUTE_READWRITE, &oldProtect);
    
    memcpy(hook->original, hook->target, 16);
    
    // JMP rel32
    hook->trampoline[0] = 0xE9;
    *(DWORD*)(hook->trampoline + 1) = (DWORD)hook->detour - (DWORD)hook->target - 5;
    memcpy(hook->target, hook->trampoline, 5);
    
    VirtualProtect(hook->target, 16, oldProtect, &oldProtect);
}
