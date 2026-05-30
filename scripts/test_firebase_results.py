import urllib.request
import json

url = 'https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json?orderBy="$key"&limitToLast=100'

try:
    with urllib.request.urlopen(url) as response:
        status = response.getcode()
        body = response.read().decode('utf-8')
        print(f"Status: {status}")
        data = json.loads(body)
        print(f"Success! Returned {len(data)} results.")
except Exception as e:
    print(f"Error fetching results URL: {e}")
