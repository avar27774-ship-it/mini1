import json

def generate_config():
    config = {
        "version": "4.0.0",
        "name": "MajesticCrypt GOD Edition",
        "features": {
            "aimbot": True,
            "esp": True,
            "god_mode": True
        }
    }
    
    with open("../config/generated.json", "w") as f:
        json.dump(config, f, indent=4)
