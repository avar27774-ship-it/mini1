#include <windows.h>

VOID CleanRegistry(VOID) {
    system("reg delete \"HKCU\\Software\\ALTv\" /f");
    system("reg delete \"HKCU\\Software\\Majestic\" /f");
}
