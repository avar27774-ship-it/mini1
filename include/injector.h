#pragma once

#include <windows.h>

BOOL InjectDLL(DWORD pid, const char* dllPath);
BOOL ReflectiveInject(HANDLE hProcess, LPVOID dllData, SIZE_T dllSize);
BOOL ManualMapInject(HANDLE hProcess, LPVOID dllData, SIZE_T dllSize);
