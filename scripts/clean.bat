@echo off
title MajesticCrypt Cleaner
color 0C

echo Cleaning MajesticCrypt traces...
sc stop MajesticGod
sc delete MajesticGod
del /f /q %SystemRoot%\System32\drivers\majestic_driver.sys 2>nul
rmdir /s /q "%LocalAppData%\altv-majestic\resources\majestic_god" 2>nul
echo Clean complete!
pause
