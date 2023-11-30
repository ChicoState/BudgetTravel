from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
# for request http
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
import json

# from . import my_hand
# from .my_hand import businesses_data
from .my_hand import *

from .models import Tourism
from .serializers import TourismSerializer
from django.utils.decorators import method_decorator


class TourismViews(APIView):
    def get(self, request):
        TourismModel = Tourism.objects.all()
        serializer = TourismSerializer(TourismModel, many=True)
        return Response({"TourismModel": serializer.data})

    def post(self, request):
        post_lat = request.data.get('lat')
        post_long = request.data.get('long')
        post_term = request.data.get('term')
        lat = str(post_lat)
        long = str(post_long)
        term = str(post_term)
        businesses_data = Search(lat, long, term)
        return Response(businesses_data)
