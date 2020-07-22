from django.views.generic import TemplateView


class StackTemplateViewSet(TemplateView):
    template_name = "index.html"

