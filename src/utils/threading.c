#include <windows.h>

HANDLE CreateSecureThread(LPTHREAD_START_ROUTINE routine, LPVOID param) {
    HANDLE hThread = CreateThread(NULL, 0, routine, param, 0, NULL);
    if (hThread) {
        SetThreadPriority(hThread, THREAD_PRIORITY_HIGHEST);
    }
    return hThread;
}
