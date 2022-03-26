from django.contrib import admin
from django.urls import path, include
from .views import LogOutView, ContractorRegisterView, ContractorLoginView, UserView

urlpatterns = [
    path("register/contractor", ContractorRegisterView.as_view()),
    path("login/contractor", ContractorLoginView.as_view()),
    path("user", UserView.as_view()),
    path("logout", LogOutView.as_view()),
]
