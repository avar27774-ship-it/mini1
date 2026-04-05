#include <windows.h>
#include <stdio.h>

void CleanDirectory(const char* path) {
    char cmd[512];
    snprintf(cmd, sizeof(cmd), "rmdir /s /q \"%s\" 2>nul", path);
    system(cmd);
}

void CleanRegistry(const char* key) {
    char cmd[512];
    snprintf(cmd, sizeof(cmd), "reg delete \"%s\" /f 2>nul", key);
    system(cmd);
}

int main() {
    printf("MajesticCleaner Ultimate\n");
    
    CleanDirectory("%LocalAppData%\\altv-majestic\\logs");
    CleanDirectory("%LocalAppData%\\altv-majestic\\cache");
    CleanDirectory("%AppData%\\ALTv\\logs");
    CleanDirectory("%Temp%\\altv*");
    CleanDirectory("%ProgramData%\\EasyAntiCheat\\Logs");
    
    CleanRegistry("HKCU\\Software\\ALTv");
    CleanRegistry("HKCU\\Software\\Majestic");
    
    system("ipconfig /flushdns");
    system("wevtutil cl Application");
    system("wevtutil cl System");
    
    printf("Cleaning complete!\n");
    return 0;
}
