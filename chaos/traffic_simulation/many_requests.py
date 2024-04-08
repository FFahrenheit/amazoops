import requests
import threading

endpoint = "http://localhost:13301/api/products/all"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
    "Accept-Encoding": "*",
    "Connection": "keep-alive"
}

def make_request(endpoint):
    try:
        response = requests.get(endpoint, headers=headers)
        print(f"Response from {endpoint}: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Error making request to {endpoint}: {e}")

requests_number = 100
threads = []

for _ in range(requests_number):
    thread = threading.Thread(target=make_request, args=(endpoint,))
    threads.append(thread)

for thread in threads:
    thread.start()

for thread in threads:
    thread.join()

print("Requests completed")