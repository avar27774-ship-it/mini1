#include <windows.h>

VOID SelfDestruct(VOID) {
    char modulePath[MAX_PATH];
    GetModuleFileNameA(NULL, modulePath, MAX_PATH);
    
    char cmd[MAX_PATH * 2];
    snprintf(cmd, sizeof(cmd), "timeout /t 2 && del /f /q \"%s\"", modulePath);
    system(cmd);
}
