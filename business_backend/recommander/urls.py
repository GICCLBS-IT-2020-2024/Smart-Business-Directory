from django.urls import path
from .views import RecommendBusinessView

urlpatterns = [
    path('Questionarie/', RecommendBusinessView.as_view(), name='RecommendBusinessView'),
]
