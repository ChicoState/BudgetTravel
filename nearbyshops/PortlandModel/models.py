from django.contrib.gis.db import models

class Portland(models.Model):
    name = models.CharField(max_length=100)
    cost = models.IntegerField(default=20) 
    location = models.PointField()
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)