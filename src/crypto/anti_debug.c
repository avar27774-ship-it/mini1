#include <windows.h>

BOOL IsDebuggerPresent_AntiDebug(void) {
    return IsDebuggerPresent();
}

BOOL CheckRemoteDebugger(void) {
    BOOL isDebugged = FALSE;
    CheckRemoteDebuggerPresent(GetCurrentProcess(), &isDebugged);
    return isDebugged;
}

VOID AntiDebugLoop(void) {
    while (1) {
        if (IsDebuggerPresent_AntiDebug() || CheckRemoteDebugger()) {
            ExitProcess(0);
        }
        Sleep(1000);
    }
}
