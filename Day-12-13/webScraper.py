import requests 
from bs4 import BeautifulSoup
from datetime import datetime

# keyword = input("Enter keyword to search in headlines: ").lower()

print("Choose a news category:")
print("1. Top News")
print("2. World")
print("3. Technology")
print("4. Science")
choice = int(input("Enter your choice (1-4): "))

match(choice):
    case 1:
        url = "https://www.bbc.com/news"
    case 2:
        url = "https://www.bbc.com/news/world"
    case 3:
        url = "https://www.bbc.com/news/technology"
    case 4:
        url = "https://www.bbc.com/news/science_and_environmen"
    case _:
        url = "https://www.bbc.com/news"

response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")
now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
headlines = soup.select('[data-testid="card-headline"]')


with open("Day-12-13/headlines_category.txt", "a") as f:
    f.write(f"Headlines scraped from {url}\n")
    f.write(f"Scraped on: {now}\n\n")
    for i, headline in enumerate(headlines[:10], start=1):
        f.write(f"{i}. {headline.get_text(strip=True)}\n")


# matchingHeadlines = [headline.get_text(strip=True) for headline in headlines if keyword in headline.get_text(strip=True).lower()]
# for i, headline in enumerate(headlines[:10], start=1):
#    print(f"{i}. {headline.get_text(strip=True)}")

# with open ("Day-12-13/data.txt", "a") as f:
#    f.write(f"Scrapped form {url} at {now} \n\n")
#    for i, headline in enumerate(headlines[:30], start=1):
#        f.writelines(f"{i}. {headline.get_text(strip=True)}\n")
        
# with open ("Day-12-13/filtered.txt", "a") as f:
#    f.write(f"Filtered Headlines with {keyword} at {now} \n\n")
#    for i, headline in enumerate(matchingHeadlines, start=1):
#        f.writelines(f"{i}. {headline}\n")
    