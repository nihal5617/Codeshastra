from django.contrib import admin
from django.urls import path, include, re_path
from .views import (
    ContractorView,
    LogOutView,
    ContractorRegisterView,
    ContractorLoginView,
    UserView,
    DayView,
)

urlpatterns = [
    path("register/contractor", ContractorRegisterView.as_view()),
    path("login/contractor", ContractorLoginView.as_view()),
    path("user", UserView.as_view()),
    path("logout", LogOutView.as_view()),
    path("day", DayView.as_view()),
    re_path(r"^contractor/(?P<pk>\d+)", ContractorView.as_view()),
]
