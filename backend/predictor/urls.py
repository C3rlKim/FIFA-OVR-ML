from django.urls import path
from predictor import views

urlpatterns = [
    path('features/',views.features_post),
]
