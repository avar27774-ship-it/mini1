#include <windows.h>

typedef struct DivineTimer {
    DWORD64 startTime;
    DWORD duration;
} DivineTimer;

void StartDivineTimer(DivineTimer* timer, DWORD durationMs) {
    timer->startTime = GetTickCount64();
    timer->duration = durationMs;
}

BOOL IsDivineTimerExpired(DivineTimer* timer) {
    return (GetTickCount64() - timer->startTime) >= timer->duration;
}
