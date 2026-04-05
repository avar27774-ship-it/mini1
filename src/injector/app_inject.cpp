#include <windows.h>

BOOL APCInject(HANDLE hProcess, DWORD threadId, LPVOID pFunction) {
    HANDLE hThread = OpenThread(THREAD_ALL_ACCESS, FALSE, threadId);
    if (!hThread) return FALSE;
    
    QueueUserAPC((PAPCFUNC)pFunction, hThread, (ULONG_PTR)NULL);
    CloseHandle(hThread);
    
    return TRUE;
}
