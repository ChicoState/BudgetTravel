from .serializers import MyTokenObtainPairSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework import generics
import random
from .passwordrecovery import send_email
# for rest quest/post
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json

from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status


@csrf_exempt  # Disable CSRF protection for this view
class PasswordRecovery(APIView):

    @api_view(['POST'])
    def send_verification_code(request):
        if request.method == "POST":
            receiver_email = str(request.POST.get('email'))
            # Generate a random 6-digit number
            random_number = str(random.randint(100000, 999999))
            send_email(receiver_email, "Your Verification Code",
                       f"Your verification code is: {random_number}")
            return Response(random_number)

    @api_view(['POST'])
    def new_password(request):
        if request.method == "POST":
            username = str(request.POST.get('username'))
            password = str(request.POST.get('new_password'))
            password2 = str(request.POST.get('new_password2'))
            matched_data = User.objects.filter(username=username)
            if matched_data:
                matched_data.password = password
                matched_data.password2 = password2
                matched_data.save()
        return JsonResponse({'key': 'value'})


class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    @api_view(['POST'])
    def post(self, request):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            self.perform_create(serializer)
            return Response("Success")

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
