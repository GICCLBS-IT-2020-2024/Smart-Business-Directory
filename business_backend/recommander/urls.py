from django.urls import path
from .views import RecommendBusinessView

urlpatterns = [
    path('counsel/', RecommendBusinessView.as_view(), name='RecommendBusinessView'),
]
