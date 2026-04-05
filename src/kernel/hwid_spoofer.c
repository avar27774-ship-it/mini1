#include <ntddk.h>

void DisableWriteProtection(void);
void EnableWriteProtection(void);

VOID SpoofSMBIOS(void) {
    CHAR fakeSerial[17] = "DEADBEEFCAFE0000";
    CHAR fakeUUID[33] = "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF";
    
    DisableWriteProtection();
    EnableWriteProtection();
}

VOID SpoofAllHardwareIDs(void) {
    SpoofSMBIOS();
}
