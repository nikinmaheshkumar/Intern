from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Habit(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='habits')
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=1000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    
class HabitLog(models.Model):
    habit = models.ForeignKey(Habit, on_delete=models.CASCADE, related_name='logs')
    date = models.DateField()
    is_completed = models.BooleanField(default=True)
    class Meta:
        unique_together = ('habit', 'date')
        ordering = ['-date']               
        verbose_name = 'Habit Log'