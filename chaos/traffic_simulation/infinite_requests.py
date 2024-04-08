import requests
import threading

endpoint = "http://localhost:13301/api/products/all"

def make_request(endpoint):
    try:
        response = requests.get(endpoint)
        print(f"Response from {endpoint}: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Error making request to {endpoint}: {e}")

try:
    while True:
        thread = threading.Thread(target=make_request, args=(endpoint,))
        thread.start()
except KeyboardInterrupt:
    print("\nStopping requests...")

print("Requests completed")