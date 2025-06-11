from django.urls import path
from .views import get_users, create_user, user_detail

urlpatterns = [
    path('users/', get_users, name='getUsers'),
    path('users/create', create_user, name='createUsers'),
    path('users/<int:pk>', user_detail, name='userDetail'),
]