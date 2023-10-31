from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import History
from .serializers import HistorySerializer

class HistoryViews(APIView):
    def get(self,request):
        HistoryModel = History.objects.all()
        serializer = HistorySerializer(HistoryModel, many=True)
        return Response({"HistoryModel": serializer.data})

    def post(self,request): #POST as a dictionary
        post_username=request.POST.get('username')
        post_stayedhotel=request.POST.get('StayedHotel')
        post_activities = request.POST.get('Activities')
        post_totalcost = int(request.POST.get('TotalCost'))
        History(username=post_username, StayedHotel=post_stayedhotel
                ,Activities=post_activities,TotalCost=post_totalcost).save()    
