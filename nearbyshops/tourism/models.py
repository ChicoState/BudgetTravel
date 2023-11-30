from django.contrib.gis.db import models
from django.contrib.gis.geos import Point


class Tourism(models.Model):
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    rating = models.CharField(max_length=50)
    latitude = models.CharField(max_length=50)
    longitude = models.CharField(max_length=50)
    location = models.PointField(default=Point(x=0.0, y=0.0))
