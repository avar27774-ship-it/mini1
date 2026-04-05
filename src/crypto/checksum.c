#include <windows.h>

DWORD CalculateCRC32(BYTE* data, DWORD size) {
    DWORD crc = 0xFFFFFFFF;
    
    for (DWORD i = 0; i < size; i++) {
        crc ^= data[i];
        for (int j = 0; j < 8; j++) {
            crc = (crc >> 1) ^ (0xEDB88320 & -(crc & 1));
        }
    }
    
    return ~crc;
}
