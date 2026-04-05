import random
import string

class VariableRenamer:
    def rename(self, code):
        names = [''.join(random.choices(string.ascii_letters, k=8)) for _ in range(100)]
        return code
