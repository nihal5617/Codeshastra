from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveAPIView
from .serializers import (
    UserSerializer,
    ContractorSerializer,
    DaySerializer,
    ProjectSerializer,
    WorkerSerializer,
)
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import User, Day, Project
import datetime, jwt

# Create your views here.
class ContractorRegisterView(CreateAPIView):
    serializer_class = ContractorSerializer


class WorkerRegisterView(APIView):
    def post(self, request):
        try:
            data = request.data
            user = UserSerializer(data=data)
            if user.is_valid():
                user.save()
                return Response({"message": "Successfully registered"})
            else:
                return Response({"message": "Failed to register"})
        except:
            return Response({"message": "Failed to register"})


class ContractorLoginView(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        user = User.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed("User not found!")

        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect Password!")

        payload = {
            "id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow(),
        }
        token = jwt.encode(payload, "lance", algorithm="HS256")
        res = Response()
        res.set_cookie(
            key="jwt",
            value=token,
            # httponly=True,
            # samesite="None",
            # domain=None,
            # secure=True,
        )
        serializer = UserSerializer(user)
        serializer.data.pop("id", None)
        res.data = {
            "email": serializer.data["email"],
            "name": serializer.data["name"],
            "lastname": serializer.data["lastname"],
            "img": serializer.data["img"],
            "jwt": token,
            "address": serializer.data["address"],
            "phone": serializer.data["phone"],
            "title": serializer.data["title"],
        }
        return res

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get("jwt")
        if not token:
            raise AuthenticationFailed("Unauthenticated!")
        try:
            payload = jwt.decode(token, "lance", algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated!")
        user = User.objects.get(id=payload["id"])
        serializer = UserSerializer(user)
        return Response({"email": serializer.data["email"]})


class LogOutView(APIView):
    def post(self, request):
        res = Response()
        res.delete_cookie("jwt")
        res.data = {"message": "success"}
        return res


class DayView(ListCreateAPIView):
    serializer_class = DaySerializer
    queryset = Day.objects.filter(Project_id=1)


class ContractorView(APIView):
    def post(self, request):
        token = request.data["jwt"]
        if not token:
            raise AuthenticationFailed("Unauthenticated!")
        try:
            payload = jwt.decode(token, "lance", algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Token Expired!")
        contractor = User.objects.get(id=payload["id"])
        serializer = UserSerializer(contractor)
        return Response(serializer.data)


class ProjectView(APIView):
    def post(self, request):
        token = request.data["jwt"]
        if not token:
            raise AuthenticationFailed("Unauthenticated!")
        try:
            payload = jwt.decode(token, "lance", algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Token Expired!")
        project = Project.objects.get(Contractor_id=payload["id"])
        print(project)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)
