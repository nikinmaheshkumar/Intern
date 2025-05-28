import requests 
from bs4 import BeautifulSoup
from datetime import datetime

url = "https://www.bbc.com/news"

keyword = input("Enter keyword to search in headlines: ").lower()

response = requests.get(url)

soup = BeautifulSoup(response.content, "html.parser")

now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

headlines = soup.select('[data-testid="card-headline"]')

matchingHeadlines = [headline.get_text(strip=True) for headline in headlines if keyword in headline.get_text(strip=True).lower()]

# for i, headline in enumerate(headlines[:10], start=1):
#    print(f"{i}. {headline.get_text(strip=True)}")

with open ("Day-12-13/data.txt", "a") as f:
    f.write(f"Scrapped form {url} at {now} \n\n")
    for i, headline in enumerate(headlines[:30], start=1):
        f.writelines(f"{i}. {headline.get_text(strip=True)}\n")
        
with open ("Day-12-13/filtered.txt", "a") as f:
    f.write(f"Filtered Headlines with {keyword} at {now} \n\n")
    for i, headline in enumerate(matchingHeadlines, start=1):
        f.writelines(f"{i}. {headline}\n")
    