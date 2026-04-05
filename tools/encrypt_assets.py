import base64

def encrypt_asset(file_path):
    with open(file_path, 'rb') as f:
        data = f.read()
    encrypted = base64.b64encode(data)
    with open(file_path + '.enc', 'wb') as f:
        f.write(encrypted)
