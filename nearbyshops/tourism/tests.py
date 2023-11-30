from django.test import TestCase
from rest_framework.test import APIClient
from .views import *
# Create your tests here.


class Toursim_TEST(TestCase):
    def test_post(self):
        c = APIClient()
        data = {
            "lat": "39.7388",
            "long": "-121.8500",
            "term": "Restaurants"
        }
        request = c.post('/api/Tourism', json.dumps(data),
                         content_type='application/json')
        print("++++++++Tourism_TEST++++++++")
        # print("Response Content:", request.content)
        print("Status Code: ", request.status_code)
        print("++++++++++++++++++++++++++++")
