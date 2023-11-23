from django.urls import path
from .views import HistoryViews

app_name = "trip_history"

urlpatterns = [
    path('History/GET', HistoryViews.GET),
    path('History/create', HistoryViews.create),
    path('History/POST', HistoryViews.POST),
]