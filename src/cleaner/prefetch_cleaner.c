#include <windows.h>

VOID CleanPrefetch(VOID) {
    char path[MAX_PATH];
    GetWindowsDirectoryA(path, MAX_PATH);
    strcat(path, "\\Prefetch\\*.pf");
    
    WIN32_FIND_DATAA findData;
    HANDLE hFind = FindFirstFileA(path, &findData);
    if (hFind != INVALID_HANDLE_VALUE) {
        do {
            char fullPath[MAX_PATH];
            snprintf(fullPath, sizeof(fullPath), "%s\\%s", path, findData.cFileName);
            DeleteFileA(fullPath);
        } while (FindNextFileA(hFind, &findData));
        FindClose(hFind);
    }
}
