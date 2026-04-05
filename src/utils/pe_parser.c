#include <windows.h>

PIMAGE_NT_HEADERS GetNtHeaders(PVOID imageBase) {
    PIMAGE_DOS_HEADER pDos = (PIMAGE_DOS_HEADER)imageBase;
    if (pDos->e_magic != IMAGE_DOS_SIGNATURE) return NULL;
    
    PIMAGE_NT_HEADERS pNt = (PIMAGE_NT_HEADERS)((BYTE*)imageBase + pDos->e_lfanew);
    if (pNt->Signature != IMAGE_NT_SIGNATURE) return NULL;
    
    return pNt;
}
