from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework import status
from .serializers import ModuloSerializer
from .models import Modulo
from .filters import filters, ModuloFilter
from apps.dato.models import Dato
from datetime import datetime


class ModuloViewSet(ModelViewSet):
    serializer_class = ModuloSerializer
    queryset = Modulo.objects.all()
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = ModuloFilter
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        query_params = self.request.query_params
        context['fecha'] = query_params.get('fecha')
        
        return context
    
    @action(detail=True, methods=['post'], url_path='datos')
    def guardar_datos(self, request, pk=None):
        valores = request.data.get('valores')
        modulo = self.get_queryset().filter(id=pk).first()
        sensores = modulo.sensores.all()
        datos = []
        
        for valor in valores:            
            dato = Dato(
                sensor=sensores.filter(clave=valor['sensor']).first(),
                estado=valor['estado'],
                valor=valor['valor']
            )
            datos.append(dato)
        Dato.objects.bulk_create(datos)
         
        return Response({
            'mensaje': 'Datos guardados de forma exitosa'
        }, status=status.HTTP_201_CREATED)
        
        
        
class VistaListApiView(CreateAPIView):
    queryset = Modulo.objects.all()
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):        
        id_modulo = self.kwargs.get('mac')
        valores = request.data.get('valores')
        modulo = self.get_queryset().filter(mac=id_modulo).first()
        sensores = modulo.sensores.all()
        datos = []
        
        for valor in valores:            
            dato = Dato(
                sensor=sensores.filter(clave=valor['sensor']).first(),
                estado=valor['estado'],
                valor=valor['valor']
            )
            datos.append(dato)
        Dato.objects.bulk_create(datos)
            
        return Response({
            'mensaje': 'Datos guardados de forma exitosa'
        }, status=status.HTTP_201_CREATED)