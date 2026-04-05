class DeadCodeGenerator:
    def generate(self):
        return """
        if (false) {
            for (var i = 0; i < 1000000; i++) {
                var x = i * i;
            }
        }
        """
