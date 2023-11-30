import requests
import json

# Define function to fetch data from Yelp API for given lat, lon, and term


def fetch_from_yelp(latitude, longitude, term):
    url = f"https://api.yelp.com/v3/businesses/search?term={term}&latitude={latitude}&longitude={longitude}&sort_by=best_match&limit=50"

    headers = {
        "accept": "application/json",
        # replace 'YOUR_API_KEY' with your actual Yelp API key
        "Authorization": "Bearer tT5OY7WJ-hzZP6feHbS7YjNuC4vckfctYZZUSpqZsA2E84uTU_XxXPUrYkia7zwMYT349_Vsg8bYOekWYSnUqP1_h5v8qzP-vORWVABUBdauh4u1ACC170QD5JU6ZXYx"
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


def Search(latitude, longitude, term):

    businesses_data = []
    if term not in allowed_terms:
        print("Invalid term entered. Please choose from the allowed terms.")
    else:
        data = fetch_from_yelp(latitude, longitude, term)

        # Check if 'businesses' key exists in the data
        if 'businesses' in data:

            for business in data['businesses']:
                # Create a dictionary for each business
                business_info = {
                    "name": business['name'],
                    "rating": business.get('rating', 'Rating information not available'),
                    "price": business.get('price', 'Price information not available'),
                    "address": ", ".join(business['location']['display_address']),
                    "latitude": business['coordinates']['latitude'],
                    "longitude": business['coordinates']['longitude']
                }
                # Add the dictionary to the list
                businesses_data.append(business_info)

            # Write the list to a JSON file
            with open('yelp_data.json', 'w') as file:
                json.dump(businesses_data, file, indent=4)

            print("Data written to 'yelp_data.json'")
        else:
            # If 'businesses' key doesn't exist, there's likely an error message
            error_message = data.get('error', {}).get(
                'description', 'Unknown error')
            print(
                f"Error fetching data for term '{term}' and coordinates ({latitude}, {longitude}): {error_message}")

        return businesses_data
