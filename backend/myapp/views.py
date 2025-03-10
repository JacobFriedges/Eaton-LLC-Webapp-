from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .models import Job, Customer, Driver, Role, User, UserRole, Comment
from .serializers import JobSerializer, CustomerSerializer, DriverSerializer, RoleSerializer, UserSerializer, UserRoleSerializer, CommentSerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import generics, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny

# Test Function
def home(request):
    return HttpResponse("Hello, this is the home page!")

class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class DriverViewSet(viewsets.ModelViewSet):
    queryset = Driver.objects.all()
    serializer_class = DriverSerializer

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserRoleViewSet(viewsets.ModelViewSet):
    queryset = UserRole.objects.all()
    serializer_class = UserRoleSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

User = get_user_model()  

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]


class CustomTokenObtainPairView(TokenObtainPairView):
    pass  # Uses the default SimpleJWT login behavior


class CustomTokenRefreshView(TokenRefreshView):
    pass  # Uses default refresh behavior

@api_view(["GET"])
def protected_view(request):
    return Response({"message": "This is a protected view!"}, status=status.HTTP_200_OK)


# class JobViewSet(viewsets.ModelViewSet):
#     queryset = Job.objects.all()
#     serializer_class = JobSerializer
#     permission_classes = [AllowAny]  # Make the endpoint public

# class CustomerViewSet(viewsets.ModelViewSet):
#     queryset = Customer.objects.all()
#     serializer_class = CustomerSerializer
#     permission_classes = [AllowAny]

# class DriverViewSet(viewsets.ModelViewSet):
#     queryset = Driver.objects.all()
#     serializer_class = DriverSerializer
#     permission_classes = [AllowAny]

# class RoleViewSet(viewsets.ModelViewSet):
#     queryset = Role.objects.all()
#     serializer_class = RoleSerializer
#     permission_classes = [AllowAny]

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [AllowAny]

# class UserRoleViewSet(viewsets.ModelViewSet):
#     queryset = UserRole.objects.all()
#     serializer_class = UserRoleSerializer
#     permission_classes = [AllowAny]

# class CommentViewSet(viewsets.ModelViewSet):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer
#     permission_classes = [AllowAny]
