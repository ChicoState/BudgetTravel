from django.test import TestCase
from rest_framework.test import APIClient
from .views import *

from .models import History
# Create your tests here.


class TripHistory_TEST(TestCase):
    def test_create(self):
        c = APIClient()
        data = {
            "username": "user1",
            "StayedHotel": "hotel1",
            "Activities": "activity1",
            "TotalCost": "100"
        }
        response = c.post('/api/History/create', json.dumps(data),
                          content_type='application/json')
        print()
        print("++++++++TripHistory_TEST_create++++++++")
        print("Status Code: ", response.status_code)
        print("+++++++++++++++++++++++++++++++++++++++")
        # Assuming 201 Created is expected
        self.assertEqual(response.status_code, 200)

    def test_post(self):
        # History(username="user1", StayedHotel="hotel1",
        #         Activities="activities", TotalCost="100").save()
        data = {
            "username": "user1"
        }
        c = APIClient()
        response = c.post('/api/History/POST', json.dumps(data),
                          content_type='application/json')
        print()
        print("++++++++TripHistory_TEST_POST++++++++")
        print("Response content: ", response.content)
        print("Status Code: ", response.status_code)
        print("++++++++++++++++++++++++++++++++++++")
        # Assuming 201 Created is expected
        self.assertEqual(response.status_code, 200)
