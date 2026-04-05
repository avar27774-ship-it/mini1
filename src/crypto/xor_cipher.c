#include <windows.h>

void XORCipher(BYTE* data, DWORD size, BYTE key) {
    for (DWORD i = 0; i < size; i++) {
        data[i] ^= key;
        key = (key * 0x1F) ^ data[i];
    }
}
