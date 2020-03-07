from django.http import HttpResponse
from django.views.generic import ListView

from .models import Project

class ProjectListView(ListView):
    model = Project
    template_name = 'projects/index.html'
    context_object_name = 'project_list'
    ordering = ['title']