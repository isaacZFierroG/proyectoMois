from django_filters import rest_framework as filters
from .models import Sensor


class SensorFilter(filters.FilterSet):
    clave = filters.CharFilter(field_name='clave', lookup_expr='contains')
    
    class Meta:
        model = Sensor
        fields = '__all__'