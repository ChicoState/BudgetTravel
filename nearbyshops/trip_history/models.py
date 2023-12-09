from django.db import models
# Create your models here.
class History(models.Model):
    username = models.CharField(max_length=100) 
    StayedHotel = models.CharField(max_length=1000) 
    TripPeriod = models.CharField(max_length=100) #Jan 1 - Jan 12
    Activities = models.CharField(max_length=1000) #Fishing, Museum...
    TotalCost = models.IntegerField() 