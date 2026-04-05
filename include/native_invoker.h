#pragma once

#include <windows.h>

typedef void(*NativeInvoke)(UINT64 hash, UINT64* args, int argCount, UINT64* ret);

UINT64 GetNativeHash(const char* name);
void InvokeNative(UINT64 hash, UINT64* args, int argCount, UINT64* ret);
