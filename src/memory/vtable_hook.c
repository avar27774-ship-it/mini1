#include <windows.h>

PVOID HookVTable(PVOID* vtable, int index, PVOID hook) {
    DWORD oldProtect;
    VirtualProtect(&vtable[index], sizeof(PVOID), PAGE_READWRITE, &oldProtect);
    
    PVOID original = vtable[index];
    vtable[index] = hook;
    
    VirtualProtect(&vtable[index], sizeof(PVOID), oldProtect, &oldProtect);
    
    return original;
}
