from django.http import JsonResponse

def get_items(request):
    items = [{"id": 1, "name": "Item 1"}, {"id": 2, "name": "Item 2"}]
    return JsonResponse(items, safe=False)
