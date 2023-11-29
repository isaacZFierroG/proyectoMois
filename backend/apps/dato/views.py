from rest_framework.viewsets import ModelViewSet
from .serializers import DatoSerializer
from .models import Dato
from .filters import filters, DatoFilter


class DatoViewSet(ModelViewSet):
    serializer_class = DatoSerializer
    queryset = Dato.objects.all()
    filter_backends = [filters.DjangoFilterBackend]
    filterset_class = DatoFilter
    
    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset

    def create(self, request):
        valores = request.data['valores']
        valores_serializer = self.get_serializer(data=valores, many=True)
        return super().create(request)