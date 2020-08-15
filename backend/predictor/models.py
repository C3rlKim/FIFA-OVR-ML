from django.db import models

# Create your models here.
class Feature(models.Model):
    age = models.IntegerField()
    potential = models.IntegerField()
    defending = models.IntegerField()
    skill_ball_control = models.IntegerField()
    movement_reactions = models.IntegerField()
    mentality_composure = models.IntegerField()
    gk_diving = models.IntegerField()
    gk_handling = models.IntegerField()
    gk_positioning = models.IntegerField()
    gk_reflexes = models.IntegerField()
    st = models.IntegerField()
    cf = models.IntegerField()
    cam = models.IntegerField()
    rm = models.IntegerField()
    cdm = models.IntegerField()
    rwb = models.IntegerField()
    cb = models.IntegerField()
    rb = models.IntegerField()
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
