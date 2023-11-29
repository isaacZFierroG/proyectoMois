from tabnanny import verbose
from xml.parsers.expat import model
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models


class UsuarioManager(BaseUserManager):
    def _create_user(self, correo, nombre, apellido, rol, password, is_staff, is_superuser, **extra_fields):
        user = self.model(
            correo=correo,
            nombre=nombre,
            apellido=apellido,
            rol=rol,
            is_staff=is_staff,
            is_superuser=is_superuser,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user
    
    def create_user(self, correo, nombre, apellido, rol, password=None, **extra_fields):
        return self._create_user(correo, nombre, apellido, rol, password, False, False, **extra_fields)

    def create_superuser(self, correo, nombre, apellido, rol, password=None, **extra_fields):
        return self._create_user(correo, nombre, apellido, rol, password, True, True, **extra_fields)


class Usuario(AbstractBaseUser, PermissionsMixin):
    ROLES = (
        (1, 'ADMIN'),
        (2, 'SUPERVISOR'),
        (3, 'OPERADOR')
    )
    
    rol = models.IntegerField(
        'Rol del usuario',
        choices=ROLES,
        default=3
    )
    correo = models.EmailField(
        'Correo del usuario',
        unique=True
    )
    nombre = models.CharField(
        'Nombre del usuario',
        max_length=100
    )
    apellido = models.CharField(
        'Apellido del usuario',
        max_length=100
    )
    mina = models.CharField(
        'Mina a la que es asignado el usuario',
        max_length=150,
        blank=True,
        null=True
    )
    area = models.CharField(
        'Area de la mina a la que es asignado el usuario',
        max_length=150,
        blank=True,
        null=True
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects = UsuarioManager()
    
    USERNAME_FIELD = 'correo'
    REQUIRED_FIELDS = ('nombre', 'apellido', 'rol')
    
    class Meta:
        verbose_name = 'usuario'
        verbose_name_plural = 'usuarios'
        db_table = 'usuarios'
    
    def __str__(self):
        return f'<{self.nombre} | {self.apellido}>'