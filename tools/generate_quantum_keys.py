import secrets

def generate_quantum_key(length=32):
    return secrets.token_bytes(length)

def save_key(key, path):
    with open(path, 'wb') as f:
        f.write(key)

if __name__ == "__main__":
    key = generate_quantum_key()
    save_key(key, "quantum.key")
