CC = gcc
CXX = g++
CFLAGS = -O2 -Wall
LDFLAGS = -static

all: driver injector cleaner

driver:
	cl /nologo /O2 /GS- /kernel src/kernel/*.c /link /driver /out:build/majestic_driver.sys

injector:
	$(CXX) $(CFLAGS) $(LDFLAGS) src/injector/*.cpp src/injector/*.c -o build/Majestic_Injector.exe

cleaner:
	$(CC) $(CFLAGS) $(LDFLAGS) src/cleaner/cleaner_ultimate.c -o build/cleaner_ultimate.exe

clean:
	rm -rf build/*

install:
	powershell -ExecutionPolicy Bypass -File scripts/install_god.bat

run:
	powershell -ExecutionPolicy Bypass -File scripts/run_god.bat
