from django.urls import path, include
from .views import (
    ProjectListView
)
urlpatterns = [
    path('', ProjectListView.as_view(), name='index'),
]