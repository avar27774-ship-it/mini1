#include <windows.h>

BOOL ManualMapInject(HANDLE hProcess, LPVOID pDllData, SIZE_T dllSize) {
    LPVOID pRemoteMemory = VirtualAllocEx(hProcess, NULL, dllSize, 
                                          MEM_COMMIT | MEM_RESERVE, 
                                          PAGE_EXECUTE_READWRITE);
    if (!pRemoteMemory) return FALSE;
    
    WriteProcessMemory(hProcess, pRemoteMemory, pDllData, dllSize, NULL);
    
    HANDLE hThread = CreateRemoteThread(hProcess, NULL, 0, 
                                        (LPTHREAD_START_ROUTINE)pRemoteMemory,
                                        NULL, 0, NULL);
    if (hThread) {
        WaitForSingleObject(hThread, INFINITE);
        CloseHandle(hThread);
        return TRUE;
    }
    
    return FALSE;
}
