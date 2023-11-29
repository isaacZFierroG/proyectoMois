from django.db import models
from apps.general.models import ModeloBase


class Modulo(ModeloBase):    
    mac = models.CharField(max_length=20)
    mina = models.CharField(
        max_length=150,
    )
    area = models.CharField(
        max_length=150,
    )
    
    class Meta:
        verbose_name = 'modulo'
        verbose_name_plural = 'modulos'
        db_table = 'modulos'
    
    def __str__(self):
        return self.mac