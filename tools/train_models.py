import argparse
import numpy as np

def train_aimbot_model():
    print("Training aimbot model...")
    # Model training logic

def train_esp_model():
    print("Training ESP model...")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--quick", action="store_true")
    args = parser.parse_args()
    
    train_aimbot_model()
    train_esp_model()
