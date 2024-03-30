import requests
import json


for i in range(101):
    res = requests.get("http://localhost:3000/api/iterations")
    data = res.json()
    with open(f"data/res{i}.json", "w") as f:
        json.dump(data, f)
