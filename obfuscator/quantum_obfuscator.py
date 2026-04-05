import hashlib

class QuantumObfuscator:
    def obfuscate(self, code):
        hash_obj = hashlib.sha256(code.encode())
        return f"// Quantum hash: {hash_obj.hexdigest()}\n{code}"
