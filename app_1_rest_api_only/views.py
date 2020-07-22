from django.core.cache import cache
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import Throttled
from rest_framework.status import (
    HTTP_201_CREATED, HTTP_200_OK, HTTP_400_BAD_REQUEST,
)
from StackOverflowAPI.utils import (
  AnonymousPerDayThrottle, AnonymousPerMinThrottle, CustomPagination
)
from stackapi import StackAPI
import time
import datetime


class StackApiQuestionsView(APIView):
    permission_classes = [AllowAny, ]
    pagination_class = CustomPagination
    throttle_classes = [
        AnonymousPerDayThrottle, AnonymousPerMinThrottle
    ]
    # helping function for throttle exceed message

    def throttled(self, request, wait):
        raise Throttled(detail={
            "message": "request limit exceeded",
            "availableIn": f"{wait} seconds",
            "throttleType": "Anonymous User "
        })

    def get(self, request):
        context = {
            'data': 'noting here'
        }

        return Response(context, status=HTTP_200_OK)

    def post(self, request):
        requested_data = request.data['data']
        # converting date into timestamp
        requested_data.update({'fromdate': int(str(time.mktime(
          datetime.datetime.strptime(requested_data['fromdate']
                                     , "%d/%m/%Y").timetuple())
                                    ).split('.')[0])})
        requested_data.update({'todate': int(str(time.mktime(
          datetime.datetime.strptime(requested_data['todate']
                                     , "%d/%m/%Y").timetuple())
                                    ).split('.')[0])})
        if requested_data['max'] is None:
            requested_data.pop('max')
        if requested_data['min'] is None:
            requested_data.pop('min')
        number_of_results = requested_data.pop('number_of_results')
        intagg_string = 'in' + '-' + ";".join(requested_data['tagged'])
        ex_tagg_string = 'ex'+'-'+';'.join(requested_data['nottagged'])
        other_string = "-".join([str(i) for i in requested_data.values()
                                 if type(i) is not list ])
        result_string = 'results'+'-' + str(number_of_results) if type(
              number_of_results) is int else '10'
        cache_key = intagg_string+ex_tagg_string+other_string+result_string
        cache_time = 86400
        data = cache.get(cache_key)
        context = {
          'message': 'data cached ',
          'data': []
        }
        if data:
            context.update({'data': data})
            return Response(context, status=HTTP_200_OK)
        else:
            api_obj = StackAPI('stackoverflow')
            # 10 result by default

            api_obj.max_pages = 1
            api_obj.page_size = 10
            if number_of_results is not None:
                api_obj.max_pages = number_of_results//10
            if 'tagged' in requested_data:
                requested_data.update({'tagged': ";".join(
                  sorted(requested_data['tagged'][:4]))})
            if 'nottagged' in requested_data:
                requested_data.update({'nottagged': ";".join(
                  sorted(requested_data['nottagged'][:4]))})
            try:
                if requested_data['order'] == 'ascending':
                    requested_data.pop('order')
                else:
                    requested_data.update({'order': 'desc'})
                question_req = api_obj.fetch('questions', **requested_data)
                cache.set(cache_key, question_req, cache_time)
                context.update({'message': 'data fetched successfully',
                                'data': question_req})
                return Response(context, status=HTTP_201_CREATED)
            except:
                context.update({'message': 'request error form StackAPi'})
                return Response(context, status=HTTP_400_BAD_REQUEST)
