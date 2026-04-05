#!/usr/bin/env python3
import os
import sys
import subprocess
import shutil

def main():
    print("=" * 50)
    print("  MajesticCrypt GOD Edition Builder")
    print("=" * 50)
    
    # Пути
    script_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.dirname(script_dir)
    src_dir = os.path.join(root_dir, "src")
    build_dir = os.path.join(root_dir, "build")
    
    # Создание build папки
    if not os.path.exists(build_dir):
        os.makedirs(build_dir)
    
    # Компиляция драйвера (требуется Visual Studio и WDK)
    print("\n[*] Building kernel driver...")
    driver_src = os.path.join(src_dir, "kernel", "driver_main.c")
    driver_out = os.path.join(build_dir, "majestic_driver.sys")
    
    # Проверка наличия компилятора
    try:
        subprocess.run(["cl", "/?"], capture_output=True, check=False)
        subprocess.run([
            "cl", "/nologo", "/O2", "/GS-", "/kernel",
            driver_src, "/link", "/driver", f"/out:{driver_out}"
        ], check=False)
        print("[+] Driver built successfully")
    except FileNotFoundError:
        print("[!] Visual Studio compiler not found. Install Visual Studio with C++ development.")
    
    # Компиляция инжектора (требуется MinGW)
    print("\n[*] Building injector...")
    injector_src = os.path.join(src_dir, "injector", "main.cpp")
    loader_src = os.path.join(src_dir, "injector", "reflective_loader.c")
    injector_out = os.path.join(build_dir, "Majestic_Injector.exe")
    
    try:
        subprocess.run(["g++", "--version"], capture_output=True, check=False)
        subprocess.run([
            "g++", "-O2", "-static", "-Wall", "-m64",
            injector_src, loader_src, "-o", injector_out
        ], check=False)
        print("[+] Injector built successfully")
    except FileNotFoundError:
        print("[!] MinGW not found. Install MinGW-w64 and add to PATH.")
    
    # Компиляция очистки
    print("\n[*] Building cleaner...")
    cleaner_src = os.path.join(src_dir, "cleaner", "cleaner_ultimate.c")
    cleaner_out = os.path.join(build_dir, "cleaner_ultimate.exe")
    
    try:
        subprocess.run(["gcc", "--version"], capture_output=True, check=False)
        subprocess.run([
            "gcc", "-O2", "-static", "-s", "-m64",
            cleaner_src, "-o", cleaner_out
        ], check=False)
        print("[+] Cleaner built successfully")
    except FileNotFoundError:
        print("[!] GCC not found.")
    
    # Копирование ресурсов
    print("\n[*] Copying resources...")
    resource_src = os.path.join(src_dir, "resource")
    resource_dst = os.path.join(build_dir, "majestic_god")
    
    if os.path.exists(resource_src):
        if os.path.exists(resource_dst):
            shutil.rmtree(resource_dst)
        shutil.copytree(resource_src, resource_dst)
        print("[+] Resources copied")
    
    # Копирование конфигов
    print("\n[*] Copying configs...")
    config_src = os.path.join(root_dir, "config")
    config_dst = os.path.join(build_dir, "config")
    
    if os.path.exists(config_src):
        if os.path.exists(config_dst):
            shutil.rmtree(config_dst)
        shutil.copytree(config_src, config_dst)
        print("[+] Configs copied")
    
    print("\n" + "=" * 50)
    print("  BUILD COMPLETE!")
    print(f"  Output: {build_dir}")
    print("=" * 50)

if __name__ == "__main__":
    main() ц
