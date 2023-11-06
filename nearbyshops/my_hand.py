import requests

# Define function to fetch data from Yelp API for given lat, lon, and term
def fetch_from_yelp(latitude, longitude, term):
    url = f"https://api.yelp.com/v3/businesses/search?term={term}&latitude={latitude}&longitude={longitude}&sort_by=best_match&limit=50"

    headers = {
        "accept": "application/json",
        "Authorization": "Bearer tT5OY7WJ-hzZP6feHbS7YjNuC4vckfctYZZUSpqZsA2E84uTU_XxXPUrYkia7zwMYT349_Vsg8bYOekWYSnUqP1_h5v8qzP-vORWVABUBdauh4u1ACC170QD5JU6ZXYx"  # replace 'YOUR_API_KEY' with your actual Yelp API key
    }

    response = requests.get(url, headers=headers)
    return response.json()

# Allowed terms
allowed_terms = [
    "Active Life", "Arts & Entertainment", "Automotive", "Beauty & Spas",
    "Education", "Event Planning & Services", "Financial Services", "Food",
    "Health & Medical", "Home Services", "Hotels & Travel", "Local Flavor",
    "Local Services", "Mass Media", "Nightlife", "Pets",
    "Professional Services", "Public Services & Government", "Real Estate",
    "Religious Organizations", "Restaurants", "Shopping"
]

# Prompt user for latitude, longitude, and term
latitude = input("Enter latitude: ")
longitude = input("Enter longitude: ")
term = input(f"Enter term (choose from {', '.join(allowed_terms)}): ")

if term not in allowed_terms:
    print("Invalid term entered. Please choose from the allowed terms.")
else:
    data = fetch_from_yelp(latitude, longitude, term)
    
    # Check if 'businesses' key exists in the data
    if 'businesses' in data:
        for business in data['businesses']:
            name = business['name']
            price = business.get('price', 'Price information not available')
            address = ", ".join(business['location']['display_address'])
            business_latitude = business['coordinates']['latitude']
            business_longitude = business['coordinates']['longitude']
            
            # Print the business details
            print(f"Name: {name}")
            print(f"Price: {price}")
            print(f"Address: {address}")
            print(f"Latitude: {business_latitude}")
            print(f"Longitude: {business_longitude}")
            print('-'*40)
    else:
        # If 'businesses' key doesn't exist, there's likely an error message
        error_message = data.get('error', {}).get('description', 'Unknown error')
        print(f"Error fetching data for term '{term}' and coordinates ({latitude}, {longitude}): {error_message}")
