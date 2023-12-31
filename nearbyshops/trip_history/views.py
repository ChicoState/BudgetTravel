from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

# for rest request/post
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json

from .models import History
from .serializers import HistorySerializer


@csrf_exempt  # Disable CSRF protection for this view
# @require_http_methods(["POST"])
class HistoryViews(APIView):

    @api_view(['GET'])
    def GET(request):
        if request.method == "GET":
            HistoryModel = History.objects.all()
            serializer = HistorySerializer(HistoryModel, many=True)
            return Response({"HistoryModel": serializer.data})

    @api_view(['POST'])
    def create(request):  # POST as a dictionary
        if request.method == "POST":
            post_username = str(request.POST.get('username'))
            post_stayedhotel = str(request.POST.get('StayedHotel'))
            post_trip_period = str(request.POST.get('TripPeriod'))
            post_activities = str(request.POST.get('Activities'))
            post_totalcost = str(request.POST.get('TotalCost'))
            History(username=post_username, StayedHotel=post_stayedhotel,
                    Activities=post_activities, TotalCost=post_totalcost,
                    TripPeriod=post_trip_period).save()
            return JsonResponse({'key': 'value'})

    @api_view(['POST'])
    def POST(request):
        if request.method == "POST":
            post_username = request.POST.get('username')
            matched_data = History.objects.filter(username=post_username)
            if not matched_data:
                return Response({'message': 'No data found for the specified username'})
            serializer = HistorySerializer(matched_data, many=True)
            return Response(serializer.data)
            # return Response(matched_data)
