import zipfile
import os

def pack_build():
    with zipfile.ZipFile("MajesticCrypt_v4.0.zip", "w") as zipf:
        for root, dirs, files in os.walk("../build"):
            for file in files:
                zipf.write(os.path.join(root, file))
