from rest_framework.viewsets import ModelViewSet
from .serializers import SensorSerializer
from .models import Sensor
from .filters import filters, SensorFilter


class SensorViewSet(ModelViewSet):
    serializer_class = SensorSerializer
    queryset = Sensor.objects.all()
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = SensorFilter