from django.conf.urls import url
from app_2_with_angularjs.views import StackTemplateViewSet


urlpatterns = [
    url(r'stackHome/', StackTemplateViewSet.as_view(), name='app2_home'),
]
