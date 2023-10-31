from django.urls import path
from .views import HistoryViews

app_name = "trip_history"

urlpatterns = [
    path('History', HistoryViews.as_view()),
]