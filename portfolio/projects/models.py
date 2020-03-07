from django.db import models

class Project(models.Model):
    title       = models.CharField(max_length=100)
    description = models.TextField()
    link        = models.CharField(max_length=300, default="No link provided...")
    image       = models.ImageField(upload_to='images/', default='No image available...') 

    def __str__(self):
        return self.title