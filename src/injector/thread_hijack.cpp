#include <windows.h>

BOOL HijackThread(HANDLE hProcess, DWORD threadId, LPVOID pFunction) {
    HANDLE hThread = OpenThread(THREAD_ALL_ACCESS, FALSE, threadId);
    if (!hThread) return FALSE;
    
    SuspendThread(hThread);
    
    CONTEXT ctx = { CONTEXT_FULL };
    GetThreadContext(hThread, &ctx);
    
#ifdef _WIN64
    ctx.Rip = (DWORD64)pFunction;
#else
    ctx.Eip = (DWORD)pFunction;
#endif
    
    SetThreadContext(hThread, &ctx);
    ResumeThread(hThread);
    CloseHandle(hThread);
    
    return TRUE;
}
