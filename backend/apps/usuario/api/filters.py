from django_filters import rest_framework as filters
from apps.usuario.models import Usuario


class UsuarioFilter(filters.FilterSet):
    rol = filters.NumberFilter(lookup_expr='iexact')
    mina = filters.CharFilter(lookup_expr='icontains')
    area = filters.CharFilter(lookup_expr='icontains')
    nombre = filters.CharFilter(lookup_expr='icontains')
    
    class Meta:
        model = Usuario
        fields = '__all__'