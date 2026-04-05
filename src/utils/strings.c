#include <windows.h>

void WCharToChar(const wchar_t* wstr, char* str, int size) {
    WideCharToMultiByte(CP_UTF8, 0, wstr, -1, str, size, NULL, NULL);
}

void CharToWChar(const char* str, wchar_t* wstr, int size) {
    MultiByteToWideChar(CP_UTF8, 0, str, -1, wstr, size);
}
