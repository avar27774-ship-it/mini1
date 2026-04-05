#include <windows.h>

LONG WINAPI VectoredExceptionHandler(PEXCEPTION_POINTERS ExceptionInfo) {
    return EXCEPTION_CONTINUE_SEARCH;
}

VOID InstallExceptionHandler(VOID) {
    AddVectoredExceptionHandler(1, VectoredExceptionHandler);
}
