@echo off
g++ -O2 -static -Wall -m64 ..\src\injector\*.cpp ..\src\injector\*.c -o ..\build\Majestic_Injector.exe
pause
