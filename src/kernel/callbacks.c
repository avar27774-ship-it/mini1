#include <ntddk.h>

OB_PREOP_CALLBACK_STATUS PreOpenProcessCallback(PVOID RegistrationContext, POB_PRE_OPERATION_INFORMATION OperationInformation) {
    return OB_PREOP_SUCCESS;
}

VOID RegisterProtectionCallbacks(VOID) {
    DbgPrint("[Callbacks] Registered protection callbacks\n");
}

VOID UnregisterProtectionCallbacks(VOID) {
    DbgPrint("[Callbacks] Unregistered protection callbacks\n");
}
