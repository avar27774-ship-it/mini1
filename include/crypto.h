#pragma once

#include <windows.h>

void XOREncrypt(BYTE* data, DWORD size, BYTE key);
void AESEncrypt(BYTE* data, DWORD size, BYTE* key, DWORD keySize);
DWORD CalculateCRC32(BYTE* data, DWORD size);
