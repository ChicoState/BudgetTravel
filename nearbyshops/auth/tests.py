from django.test import TestCase
from rest_framework.test import APIClient
from .views import *
from .serializers import *
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

# Create your tests here.


class MyTokenObtainPairSerializer_TEST(TestCase):
    def test_serializer(self):
        user = User.objects.create_user(
            username='demo_user', password='demopassword')
        token = Token.objects.create(user=user)
        serializer = MyTokenObtainPairSerializer(data=token)
        # print(serializer)
        self.assertTrue(serializer.is_valid())
        # print(serializer.errors)


class Register_Serializer_TEST(TestCase):
    def test_serializer(self):
        data = {
            "username": "user1",
            "password": "pass1",
            "password2": "pass3542",
            "email": "dummy@gmail.com",
            "firstname": "first",
            "lastname": "last"
        }
        serializer = RegisterSerializer(data=data)
        # print(serializer)
        self.assertTrue(serializer.is_valid())
        # print(serializer.errors)


class Auth_TEST(TestCase):
    def test_send_verification_code(self):
        c = APIClient()
        data = {
            "email": "dummy@gmail.com"
        }
        response = c.post('/auth/password_recovery', json.dumps(data),
                          content_type='application/json')
        print()
        print("++++++++Auth_TEST_send_verification_code++++++++")
        print("Response data", response.content)
        print("Status Code: ", response.status_code)
        print("++++++++++++++++++++++++++++++++++++++++++++++++")

    def test_new_password(self):
        c = APIClient()
        data = {
            "username": "user1",
            "password": "newpass",
            "password2": "newpass",

        }
        response = c.post('/auth/create_new_password', json.dumps(data),
                          content_type='application/json')
        print()
        print("++++++++Auth_TEST_new_password++++++++")
        print("Response data", response.content)
        print("Status Code: ", response.status_code)
        print("+++++++++++++++++++++++++++++++++++++++")
