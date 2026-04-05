#include <windows.h>
#include <stdio.h>

void LogRealityEvent(const char* event) {
    FILE* log = fopen("reality_log.txt", "a");
    if (log) {
        fprintf(log, "[%I64u] %s\n", GetTickCount64(), event);
        fclose(log);
    }
}
