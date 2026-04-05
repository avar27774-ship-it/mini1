@echo off
title MajesticCrypt Uninstaller
color 0C

sc stop MajesticGod
sc delete MajesticGod
del /f /q %SystemRoot%\System32\drivers\majestic_driver.sys
rmdir /s /q "%LocalAppData%\altv-majestic\resources\majestic_god"

echo Uninstall complete!
pause
