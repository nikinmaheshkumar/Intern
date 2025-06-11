from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import HabitViewSet, HabitLogViewSet  

router = DefaultRouter()
router.register(r'habits', HabitViewSet)
router.register(r'logs', HabitLogViewSet)  

urlpatterns = [
    path('', include(router.urls)),
]
