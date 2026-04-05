#include <windows.h>

void QuantumEncrypt(BYTE* data, DWORD size, BYTE* quantumKey) {
    for (DWORD i = 0; i < size; i++) {
        data[i] ^= quantumKey[i % 32] ^ (GetTickCount() & 0xFF);
    }
}
