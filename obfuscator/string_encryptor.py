import base64

class StringEncryptor:
    def encrypt(self, text):
        return base64.b64encode(text.encode()).decode()
    
    def decrypt(self, text):
        return base64.b64decode(text.encode()).decode()
