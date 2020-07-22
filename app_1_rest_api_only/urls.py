from django.conf.urls import url
from app_1_rest_api_only.views import StackApiQuestionsView

urlpatterns = [
    url(r'stackApi/', StackApiQuestionsView.as_view(), name='stack_api')
]
