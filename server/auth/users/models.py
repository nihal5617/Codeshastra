import email
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    lastname = models.CharField(max_length=255, null=True)
    img = models.ImageField(null=True)
    username = None
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []


class Contractor(User):
    Present = models.IntegerField(default=0)
    Violations = models.IntegerField(default=0)
    Absent = models.IntegerField(default=0)


class Project(models.Model):
    Name = models.CharField(max_length=255)
    Description = models.CharField(max_length=255)
    Start_date = models.DateTimeField()
    End_date = models.DateTimeField()
    workers = models.IntegerField()
    Contractor = models.ForeignKey(Contractor, on_delete=models.CASCADE)


class Worker(User):
    Present = models.IntegerField(default=0)
    Violations = models.IntegerField(default=0)
    Absent = models.IntegerField(default=0)
    Contractor = models.ForeignKey(Contractor, on_delete=models.CASCADE)
    Project = models.OneToOneField(Project, on_delete=models.CASCADE)

class Day(models.Model):
    date = models.DateField()
    Project = models.ForeignKey(Project, on_delete=models.CASCADE)
    worker = models.IntegerField(default=0)