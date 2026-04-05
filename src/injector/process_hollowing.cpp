#include <windows.h>

BOOL ProcessHollowing(LPCWSTR targetProcess, LPCWSTR replacementProcess) {
    STARTUPINFO si = { sizeof(si) };
    PROCESS_INFORMATION pi;
    
    if (!CreateProcessW(targetProcess, NULL, NULL, NULL, FALSE, 
                        CREATE_SUSPENDED, NULL, NULL, &si, &pi)) {
        return FALSE;
    }
    
    ResumeThread(pi.hThread);
    return TRUE;
}
