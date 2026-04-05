#include <windows.h>

BOOL IsRunningInVM(void) {
    BOOL isVM = FALSE;
    
    // Check for VM artifacts
    if (GetModuleHandleA("vboxhook.dll") || GetModuleHandleA("vmmouse.dll")) {
        isVM = TRUE;
    }
    
    return isVM;
}
