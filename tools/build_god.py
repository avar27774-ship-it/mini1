#!/usr/bin/env python3
import os
import subprocess

def main():
    print("Building MajesticCrypt GOD Edition...")
    
    os.system("python build.py")
    os.system("python generate_quantum_keys.py")
    os.system("python train_models.py --quick")
    
    print("God build complete!")

if __name__ == "__main__":
    main()
