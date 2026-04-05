import os
import subprocess

print("[*] Building MajesticCrypt GOD Edition...")

# Build driver
os.system("cl /nologo /O2 /GS- /kernel ../src/kernel/driver_main.c /link /driver /out:../build/majestic_driver.sys")

# Build injector
os.system("g++ -O2 -static ../src/injector/main.cpp ../src/injector/reflective_loader.c -o ../build/Majestic_Injector.exe")

# Build cleaner
os.system("gcc -O2 -static ../src/cleaner/cleaner_ultimate.c -o ../build/cleaner_ultimate.exe")

print("[+] Build complete!")
