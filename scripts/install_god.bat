@echo off
title MajesticCrypt GOD Edition Installer
color 0D

echo ========================================
echo   MAJESTIC CRYPT - GOD EDITION 2026
echo ========================================
echo.

:: Проверка прав администратора
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [ERROR] Please run as Administrator!
    echo.
    pause
    exit /b 1
)

:: Получаем путь к текущей папке
set "SCRIPT_DIR=%~dp0"
set "ROOT_DIR=%SCRIPT_DIR%.."

echo [*] Installing kernel driver...

:: Копирование драйвера
if exist "%ROOT_DIR%\build\majestic_driver.sys" (
    copy /Y "%ROOT_DIR%\build\majestic_driver.sys" "%SystemRoot%\System32\drivers\" 2>nul
    echo [+] Driver copied
) else (
    echo [!] Driver not found, skipping
)

:: Создание службы
sc create MajesticGod type=kernel binPath="%SystemRoot%\System32\drivers\majestic_driver.sys" start=auto 2>nul
sc start MajesticGod 2>nul

:: Установка ALT:V ресурса
echo [*] Installing ALT:V resource...

set "ALT_RESOURCE=%LocalAppData%\altv-majestic\resources\majestic_god"
if not exist "%ALT_RESOURCE%" mkdir "%ALT_RESOURCE%" 2>nul

if exist "%ROOT_DIR%\src\resource\*" (
    xcopy /E /Y "%ROOT_DIR%\src\resource\*" "%ALT_RESOURCE%\" 2>nul
    echo [+] Resource installed
) else (
    echo [!] Resource files not found
)

:: Создание рабочего стола ярлыка
echo [*] Creating desktop shortcut...
echo %ROOT_DIR%\build\Majestic_Injector.exe > "%USERPROFILE%\Desktop\MajesticCrypt.lnk" 2>nul

echo.
echo ========================================
echo   INSTALLATION COMPLETE!
echo ========================================
echo.
echo [INFO] Next steps:
echo 1. Restart your computer (required for driver)
echo 2. Launch ALT:V and join a server
echo 3. Run Majestic_Injector.exe as Admin
echo 4. Press INSERT in game to open menu
echo.
echo [WARNING] Test mode must be enabled:
echo   bcdedit /set testsigning on
echo   then restart
echo.
pause
