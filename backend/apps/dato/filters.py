from django_filters import rest_framework as filters
from .models import Dato


class DatoFilter(filters.FilterSet):
    fecha_inicio = filters.DateTimeFilter(field_name='fecha_creacion', lookup_expr='gte')
    fecha_final = filters.DateTimeFilter(field_name='fecha_creacion', lookup_expr='lt')
    modulo = filters.CharFilter(field_name='sensor__modulo__mac')
    
    class Meta:
        model = Dato
        fields = '__all__'