#include <windows.h>

DWORD64 ChasePointer(DWORD64 base, DWORD64 offsets[], int count) {
    DWORD64 addr = base;
    
    for (int i = 0; i < count; i++) {
        if (!ReadProcessMemory(GetCurrentProcess(), (LPCVOID)addr, &addr, sizeof(addr), NULL)) {
            return 0;
        }
        addr += offsets[i];
    }
    
    return addr;
}
