from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from .serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import User
import datetime, jwt

# Create your views here.
class RegisterView(CreateAPIView):
    serializer_class = UserSerializer
    # queryset = Article.objects.all()

    # def post(self, request):
    #     print(request.data)
    #     serializer = UserSerializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data)


class LoginView(APIView):
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
            httponly=True,
            samesite="None",
            domain=None,
            secure=True,
        )
        serializer = UserSerializer(user)
        serializer.data.pop("id", None)
        res.data = {
            "email": serializer.data["email"],
            "name": serializer.data["name"],
            "lastname": serializer.data["lastname"],
            "img": serializer.data["img"],
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
        print(res)
        res.delete_cookie("jwt")
        res.data = {"message": "success"}
        return res
