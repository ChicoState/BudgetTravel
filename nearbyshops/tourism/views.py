from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

# from . import my_hand
from .my_hand import businesses_data
from .my_hand import *

from .models import Tourism
from .serializers import TourismSerializer


class TourismViews(APIView):
    def get(self, request):
        TourismModel = Tourism.objects.all()
        serializer = TourismSerializer(TourismModel, many=True)
        return Response({"TourismModel": serializer.data})

    def post(self, request, format=None):
        search_query = (request.data).split(",")
        lat = search_query[0]
        long = search_query[1]
        term = search_query[2]
        Search(lat, long, term)
        serializer = TourismSerializer(businesses_data, many=True)
        return Response(data=serializer.data)
