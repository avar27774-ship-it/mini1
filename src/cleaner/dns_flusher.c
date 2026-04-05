#include <windows.h>

VOID FlushDNS(VOID) {
    system("ipconfig /flushdns");
    system("arp -d");
    system("nbtstat -R");
}
