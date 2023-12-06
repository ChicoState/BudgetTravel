from django.test import TestCase
from rest_framework.test import APIClient
from .views import *
# Create your tests here.


class Toursim_TEST(TestCase):
    def test_post_regular_search(self):
        c = APIClient()
        data = {
            "lat": "39.7388",
            "long": "-121.8500",
            "term": "Restaurants"
        }
        request = c.post('/api/Tourism', json.dumps(data),
                         content_type='application/json')
        print()
        print("+++++++++Tourism_TEST_regular_search+++++++")
        # print("Response Content:", request.content)
        print("         Status Code: ", request.status_code)
        print("+++++++++++++++++++++++++++++++++++++++++++")
        print()

    def test_post_wrong_term(self):
        c = APIClient()
        data = {
            "lat": "39.7388",
            "long": "-121.8500",
            "term": "Space"
        }
        request = c.post('/api/Tourism', json.dumps(data),
                         content_type='application/json')

        if request.get('Content-Type') == None:
            print()
            print("++++++++Tourism_TEST_wrong_term++++++++")
            print("                 pass                  ")
            print("+++++++++++++++++++++++++++++++++++++++")
            print()

        else:
            print()
            print("++++++++Tourism_TEST_wrong_term++++++++")
            print("                 fail                  ")
            print("++++++++++++++++++++++++++++++++++++++++")
            print()
    def test_post_error_lat_term(self):
        c = APIClient()
        data = {
            "lat": "kkkkkkk",
            "long": "-121.8500",
            "term": "Restaurants"
        }
        request = c.post('/api/Tourism', json.dumps(data),
                         content_type='application/json')

        if request.json() == []:
            print("++++++++Tourism_TEST_error_long_term++++++++")
            print("pass")
            print("++++++++++++++++++++++++++++")
        else:
            print("++++++++Tourism_TEST_error_long_term++++++++")
            print("fail")
            print("++++++++++++++++++++++++++++")


    def test_post_error_long_term(self):
        c = APIClient()
        data = {
            "lat": "39.7388",
            "long": "kkkkk",
            "term": "Restaurants"
        }
        request = c.post('/api/Tourism', json.dumps(data),
                         content_type='application/json')

        if request.json() == []:
            print("++++++++Tourism_TEST_error_long_term++++++++")
            print("pass")
            print("++++++++++++++++++++++++++++")
        else:
            print("++++++++Tourism_TEST_error_long_term++++++++")
            print("fail")
            print("++++++++++++++++++++++++++++")
        # request_data = request.json()

            # Check if the response contains the expected error message
        # expected_message = "Invalid term entered. Please choose from the allowed terms."
        # self.assertIn(expected_message, request_data, "Expected error message not found in response")
