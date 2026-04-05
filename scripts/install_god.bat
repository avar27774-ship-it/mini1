@echo off
title MajesticCrypt GOD Edition Installer
color 0D

echo ========================================
echo   MAJESTIC CRYPT - GOD EDITION 2026
echo ========================================
echo.

net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] Run as Administrator!
    pause
    exit /b 1
)

echo [*] Installing driver...
copy /Y majestic_driver.sys %SystemRoot%\System32\drivers\ 2>nul
sc create MajesticGod type=kernel binPath=%SystemRoot%\System32\drivers\majestic_driver.sys start=auto
sc start MajesticGod

echo [*] Installing ALT:V resource...
set ALT_RESOURCE=%LocalAppData%\altv-majestic\resources\majestic_god
mkdir "%ALT_RESOURCE%" 2>nul
copy /Y ..\src\resource\* "%ALT_RESOURCE%\" 2>nul

echo.
echo [SUCCESS] Installation complete!
echo [INFO] Press INSERT in game to open menu
echo.
pause
