class JunkCodeGenerator:
    def generate(self):
        junk = []
        for i in range(50):
            junk.append(f"var _junk_{i} = {i * 42};")
        return '\n'.join(junk)
