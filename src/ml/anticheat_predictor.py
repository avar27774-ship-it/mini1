import numpy as np
from sklearn.neural_network import MLPClassifier

class AnticheatPredictor:
    def __init__(self):
        self.model = MLPClassifier(hidden_layer_sizes=(64, 32))
    
    def predict_ban_risk(self, features):
        return self.model.predict_proba([features])[0][1]
