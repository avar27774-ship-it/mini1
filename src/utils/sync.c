#include <windows.h>

typedef struct Mutex {
    CRITICAL_SECTION cs;
} Mutex;

void MutexInit(Mutex* mutex) {
    InitializeCriticalSection(&mutex->cs);
}

void MutexLock(Mutex* mutex) {
    EnterCriticalSection(&mutex->cs);
}

void MutexUnlock(Mutex* mutex) {
    LeaveCriticalSection(&mutex->cs);
}
