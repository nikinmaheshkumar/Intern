from google import genai

client = genai.Client(api_key="AIzaSyAKMhuVag-st0G-5Yv0KO1vQRYIS6JlInw")

response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=["How does AI work?"]
)
print(response.text)