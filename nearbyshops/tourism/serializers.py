from rest_framework_gis.serializers import GeoFeatureModelSerializer
from tourism.models import Tourism


class TourismSerializer(GeoFeatureModelSerializer):
    class Meta:
        model = Tourism
        fields = ('id', 'name', 'rating', 'price',
                  'address', 'latitude', 'longitude')
