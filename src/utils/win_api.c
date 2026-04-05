#include <windows.h>

PVOID GetAPIAddress(const char* module, const char* function) {
    HMODULE hModule = GetModuleHandleA(module);
    if (!hModule) return NULL;
    return GetProcAddress(hModule, function);
}
