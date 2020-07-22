from rest_framework.throttling import AnonRateThrottle
from rest_framework.pagination import PageNumberPagination

# custom pagination


class CustomPagination(PageNumberPagination):
    page_size = 5
    page_size_query_param = 'page_size'

# custom throttling


class AnonymousPerMinThrottle(AnonRateThrottle):
    scope = 'max_per_min'


class AnonymousPerDayThrottle(AnonRateThrottle):
    scope = 'max_per_day'
