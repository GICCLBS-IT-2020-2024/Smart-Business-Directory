
from django.db import models

class BusinessRecommendation(models.Model):
    environment = models.IntegerField()
    investment = models.IntegerField()
    time = models.IntegerField()
    managing_level = models.IntegerField()
    risk_tolerance = models.IntegerField()
    interest = models.IntegerField()
    prefer_working = models.IntegerField()
    work_life_balance = models.IntegerField()
    market = models.IntegerField()
    business_start = models.IntegerField()
    education = models.IntegerField()
    location = models.IntegerField()
    recommended_business = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"Recommendation {self.id} - {self.recommended_business}"
