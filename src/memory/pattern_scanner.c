#include <windows.h>
#include <psapi.h>

PVOID FindPattern(PVOID start, SIZE_T size, BYTE* pattern, char* mask) {
    SIZE_T patternSize = strlen(mask);
    
    for (SIZE_T i = 0; i < size - patternSize; i++) {
        BOOL found = TRUE;
        for (SIZE_T j = 0; j < patternSize; j++) {
            if (mask[j] == 'x' && ((BYTE*)start)[i + j] != pattern[j]) {
                found = FALSE;
                break;
            }
        }
        if (found) return (PVOID)((DWORD64)start + i);
    }
    
    return NULL;
}
