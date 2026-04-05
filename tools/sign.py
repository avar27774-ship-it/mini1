import os

def sign_file(file_path):
    os.system(f"signtool sign /a {file_path}")

def sign_all():
    sign_file("../build/majestic_driver.sys")
    sign_file("../build/Majestic_Injector.exe")
