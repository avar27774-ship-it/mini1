#include <windows.h>

VOID WipeLogs(VOID) {
    system("wevtutil cl Application");
    system("wevtutil cl System");
    system("wevtutil cl Security");
}
