from django.db import models

class Project(models.Model):
    title       = models.CharField(max_length=100)
    description = models.TextField(max_length=150)
    link        = models.CharField(max_length=300, default="No link provided...")
    image       = models.ImageField(upload_to='images/', default='No image available...')
    play_link   = models.CharField(max_length=300, default='')

    def __str__(self):
        return self.title