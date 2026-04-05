@echo off
call "C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars64.bat"
cl /nologo /O2 /GS- /kernel ..\src\kernel\*.c /link /driver /out:..\build\majestic_driver.sys
pause
