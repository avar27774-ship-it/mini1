#include <windows.h>

PVOID FindCodeCave(PVOID start, SIZE_T size, SIZE_T requiredSize) {
    for (SIZE_T i = 0; i < size - requiredSize; i++) {
        BOOL empty = TRUE;
        for (SIZE_T j = 0; j < requiredSize; j++) {
            if (((BYTE*)start)[i + j] != 0x00 && ((BYTE*)start)[i + j] != 0xCC) {
                empty = FALSE;
                break;
            }
        }
        if (empty) return (PVOID)((DWORD64)start + i);
    }
    return NULL;
}
