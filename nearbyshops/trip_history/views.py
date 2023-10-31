from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

from .models import History
from .serializers import HistorySerializer

class HistoryViews(APIView):
    
    @api_view(['GET'])
    def GET(request):
        if request.method == "GET":
            HistoryModel = History.objects.all()
            serializer = HistorySerializer(HistoryModel, many=True)
            return Response({"HistoryModel": serializer.data})
    
    @api_view(['POST'])
    def create(request): #POST as a dictionary
        if request.method == "POST":
            post_username = request.POST.get('username')
            post_stayedhotel = request.POST.get('StayedHotel')
            post_activities = request.POST.get('Activities')
            post_totalcost = int(request.POST.get('TotalCost'))
            History(username=post_username,StayedHotel=post_stayedhotel
                    ,Activities=post_activities,TotalCost=post_totalcost).save()    
    
    @api_view(['POST'])
    def POST(request):
        if request.method == "POST":
            post_username=request.POST.get('username')
            matched_data=History.objects.filter(username=post_username)
            serializer = HistorySerializer(matched_data, many=True)
            return Response(serializer.data)