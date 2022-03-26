from django.contrib import admin
from django.urls import path, include, re_path
from .views import (
    ContractorView,
    LogOutView,
    ContractorRegisterView,
    ContractorLoginView,
    ProjectView,
    UserView,
    DayView,
    WorkerRegisterView,
)

urlpatterns = [
    path("register/contractor", ContractorRegisterView.as_view()),
    path("login/contractor", ContractorLoginView.as_view()),
    path("user", UserView.as_view()),
    path("logout", LogOutView.as_view()),
    path("day", DayView.as_view()),
    path("contractor", ContractorView.as_view()),
    path("projects", ProjectView.as_view()),
    path("worker", WorkerRegisterView.as_view()),
]
