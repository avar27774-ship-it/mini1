#include <windows.h>

void XOREncrypt(BYTE* data, DWORD size, BYTE* key, DWORD keySize) {
    for (DWORD i = 0; i < size; i++) {
        data[i] ^= key[i % keySize];
    }
}
