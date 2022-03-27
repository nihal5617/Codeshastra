from matplotlib.pyplot import title
from rest_framework import serializers
from .models import User, Contractor, Project, Worker, Day


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "name",
            "email",
            "password",
            "lastname",
            "img",
            "phone",
            "address",
            "title",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print("niha")
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class ContractorSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = Contractor
        fields = UserSerializer.Meta.fields + ["Present", "Violations", "Absent"]


class DaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Day
        fields = ["date", "worker"]


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = UserSerializer.Meta.fields + ["Present", "Violations", "Absent"]

        def create(self, validated_data):
            print("saji;")
            password = validated_data.pop("password", None)
            instance = self.Meta.model(**validated_data)
            if password is not None:
                instance.set_password(password)
            contractor_id = validated_data.pop("contractor", None)
            if contractor_id is not None:
                contractor = Contractor.objects.get(id=contractor_id)
                instance.contractor = contractor
            else:
                print("error")

            instance.save()
            return instance
