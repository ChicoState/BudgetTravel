from django.test import TestCase
from rest_framework.test import APIClient
from .views import *
from .serializers import *
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

# Create your tests here.


class MyTokenObtainPairSerializer_TEST(TestCase):
    def test_serializer(self):
        # user = User.objects.create_user(
        #    username='demo_user', password='demopassword')
        # token = Token.objects.create(user=user)

        User.objects.create_user(username='demo_user', password='demopassword')
        user_data = {'username': 'demo_user', 'password': 'demopassword'}

        serializer = MyTokenObtainPairSerializer(data=user_data)
        self.assertTrue(serializer.is_valid(), serializer.errors)
       # serializer = MyTokenObtainPairSerializer(data=token)
        # print(serializer)
        self.assertTrue(serializer.is_valid())
        print()
        print("++++++++Auth_TEST_serializer_code++++++++++++++++++++")
        print("     MyTokenObtainPairSerializer_TEST: Passed        ")
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        print()

    def test_login(self):
        c = APIClient()

        # Register a user first
        registration_data = {
            "username": "user1",
            "password": "pass11111",
            "password2": "pass11111",
            "email": "dummy@gmail.com",
            "first_name": "first",
            "last_name": "last"
        }
        registration_serializer = RegisterSerializer(data=registration_data)
        self.assertTrue(registration_serializer.is_valid(),
                        registration_serializer.errors)
        registration_response = c.post(
            '/auth/register', json.dumps(registration_data), content_type='application/json')

        # Now attempt to login
        login_data = {
            "username": "user1",
            "password": "pass11111",
        }
        response = c.post('/auth/login', login_data, format='json')

        print()
        print("++++++++++++Auth_TEST_login++++++++++++")
        print("         Response data", response.content)
        print("         Status Code: ", response.status_code)
        print("++++++++++++++++++++++++++++++++++++++++++++++")

        # print(serializer.errors)


class Register_Serializer_TEST(TestCase):
    def test_serializer_different_password(self):
        data = {
            "username": "user1",
            "password": "pass1",
            "password2": "pass3542",
            "email": "dummy@gmail.com",
            "first_name": "first",
            "last_name": "last"
        }
        serializer = RegisterSerializer(data=data)
        # print(serializer)
       # self.assertTrue(serializer.is_valid())
        self.assertFalse(serializer.is_valid(), serializer.errors)
        print()
        print("++++++++Auth_TEST_Register_serializer_different_password_code++++++++")
        print("                         Passed                                      ")
        print("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        print()

        # print(serializer.errors)
    def test_serializer_same_password(self):
        data = {
            "username": "user1",
            "password": "pass11111",
            "password2": "pass11111",
            "email": "dummy@gmail.com",
            "first_name": "first",
            "last_name": "last"
        }
        serializer = RegisterSerializer(data=data)
        # print(serializer)
       # self.assertTrue(serializer.is_valid())
        self.assertTrue(serializer.is_valid(), serializer.errors)
        print()
        print("++++++++Auth_TEST_Register_serializer_same_password_code++++++++")
        print("                             Passed                             ")
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        print()

    def test_serializer_short_password(self):
        data = {
            "username": "user1",
            "password": "pass1",
            "password2": "pass1",
            "email": "dummy@gmail.com",
            "first_name": "first",
            "last_name": "last"
        }
        serializer = RegisterSerializer(data=data)
        # print(serializer)
       # self.assertTrue(serializer.is_valid())
        self.assertFalse(serializer.is_valid(), serializer.errors)
        print()
        print("++++++++Auth_TEST_Register_serializer_simple_password_code++++++++")
        print("                             Passed                               ")
        print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
        print()

    def test_post_register(self):
        data = {
            "username": "user1",
            "password": "pass11111",
            "password2": "pass11111",
            "email": "dummy@gmail.com",
            "first_name": "first",
            "last_name": "last"
        }
        serializer = RegisterSerializer(data=data)
        self.assertTrue(serializer.is_valid(), serializer.errors)
        c = APIClient()
        response = c.post('/auth/register', json.dumps(data),
                          content_type='application/json')
        print()
        print("++++++++++++Auth_TEST_post_register++++++++++++")
        print("         Response data", response.content)
        print("         Status Code: ", response.status_code)
        print("+++++++++++++++++++++++++++++++++++++++++++++++")
        print()


class Auth_TEST(TestCase):
    def test_send_verification_code(self):
        c = APIClient()
        data = {
            "email": "k3rpa01@gmail.com"
        }
        response = c.post('/auth/password_recovery', json.dumps(data),
                          content_type='application/json')
        print()
        print("++++++++Auth_TEST_send_verification_code++++++++")
        print("         Response data", response.content)
        print("         Status Code: ", response.status_code)
        print("++++++++++++++++++++++++++++++++++++++++++++++++")
        print()

    def test_new_password(self):
        c = APIClient()
        data = {
            "username": "user1",
            "password": "newpass",
            "password2": "newpass",

        }
        response = c.post('/auth/create_new_password/', json.dumps(data),
                          content_type='application/json')
        print()
        print("++++++++++++Auth_TEST_new_password++++++++++++")
        print("         Response data", response.content)
        print("         Status Code: ", response.status_code)
        print("++++++++++++++++++++++++++++++++++++++++++++++")
        print()
