import random
import string

class PolymorphicObfuscator:
    def __init__(self):
        self.vars = {}
    
    def obfuscate(self, code):
        lines = code.split('\n')
        result = []
        for line in lines:
            if 'var ' in line or 'let ' in line:
                var_name = ''.join(random.choices(string.ascii_letters, k=8))
                line = line.replace('var', 'var ' + var_name)
            result.append(line)
        return '\n'.join(result)
