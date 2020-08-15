from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from predictor.serializers import FeaturesSerializer

import numpy as np
import pickle
# Create your views here.

@api_view(['POST'])
def features_post(request):
    if request.method == 'POST':
        serializer = FeaturesSerializer(data=request.data)
        if serializer.is_valid():
            features_dict = request.data
            serializer.save()

            model = pickle.load(open('predictor/saved_model.pickle','rb'))
            features_list = []
            for value in features_dict.values():
                features_list.append(value)
            name = features_list.pop()

            pred_ovr = model.predict(np.array(features_list).reshape(1,-1))
            return Response(np.round(pred_ovr))
