import urllib.request
import json

url = 'https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json?orderBy="gamification/totalXP"&limitToLast=100'

try:
    with urllib.request.urlopen(url) as response:
        status = response.getcode()
        body = response.read().decode('utf-8')
        print(f"Status: {status}")
        data = json.loads(body)
        print(f"Success! Returned {len(data)} users.")
        # print keys of first few
        keys = list(data.keys())
        print(f"Sample keys: {keys[:5]}")
except Exception as e:
    print(f"Error fetching URL: {e}")
