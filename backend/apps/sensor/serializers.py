from rest_framework import serializers 
from .models import Sensor
from apps.dato.serializers import DatoSerializer


class SensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensor
        fields = '__all__'
        read_only_fields = ('id', 'fecha_creacion', 'fecha_edicion')
        
    def to_representation(self, instance):
        # listado_datos = instance.datos.all()
        # datos = []

        # for dato in listado_datos:
        #     dato_serializer = DatoSerializer(dato).data
        #     datos.append(dato_serializer)
            
        obj = super().to_representation(instance)
        print(obj)
        # obj['datos'] = datos
        
        return obj