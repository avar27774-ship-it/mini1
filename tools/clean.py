import shutil
import os

def clean_build():
    if os.path.exists("../build"):
        shutil.rmtree("../build")
    os.makedirs("../build")
    print("Build cleaned")

if __name__ == "__main__":
    clean_build()
