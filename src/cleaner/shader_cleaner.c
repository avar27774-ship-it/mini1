#include <windows.h>

VOID CleanShaderCache(VOID) {
    system("rmdir /s /q \"%LocalAppData%\\NVIDIA\\GLCache\"");
    system("rmdir /s /q \"%LocalAppData%\\AMD\\GLCache\"");
}
