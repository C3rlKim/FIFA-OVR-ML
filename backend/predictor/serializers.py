from rest_framework import serializers
from predictor.models import Feature

class FeaturesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = '__all__'
