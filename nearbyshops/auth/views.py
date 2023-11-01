from .serializers import MyTokenObtainPairSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework import generics
import random
from passwordrecovery import send_email

from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

class PasswordRecovery(APIView):

    @api_view(['POST'])
    def send_verification_code(request):
         if request.method == "POST":
            receiver_email = request.POST.get('email')
            # Generate a random 6-digit number
            random_number = str(random.randint(100000, 999999))
            send_email(receiver_email, "Your Verification Code", f"Your verification code is: {random_number}")
            return Response(random_number)
    
    @api_view(['POST'])
    def new_password(request):
        if request.method == "POST":
            username = request.POST.get('username')
            password = request.POST.get('new_password')
            password2 = request.POST.get('new_password2')
            matched_data=User.objects.filter(username=username)
            if matched_data:
                matched_data.password = password
                matched_data.password2 = password2
                matched_data.save()
            
class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer