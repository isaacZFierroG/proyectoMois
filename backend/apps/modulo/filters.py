from django_filters import rest_framework as filters
from .models import Modulo


class ModuloFilter(filters.FilterSet):
    mac = filters.CharFilter(lookup_expr='icontains')
    mina = filters.CharFilter(lookup_expr='icontains')
    area = filters.CharFilter(lookup_expr='icontains')
    
    class Meta:
        model = Modulo
        fields = '__all__'