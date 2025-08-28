from django.shortcuts import render
#Rest Framework Imports
from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
#Email Imports
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
# from django.contrib.auth import get_user_model

model1 = ChildEducationVolunteer
model2 = TrainingRequest
model3 = VolunteerRequest
model4 = RTEEnrollment

class ChildEducationVolunteer(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = model1.objects.all()
    serializer_class = ChildEducationVolunteerSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        
class TrainingRequest(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = model2.objects.all()
    serializer_class = TrainingRequestSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        
class VolunteerRequest(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = model3.objects.all()
    serializer_class = VolunteerRequestSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        
class RTEEnrollment(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = model4.objects.all()
    serializer_class = RTEEnrollmentSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        
class IncidentReport(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]  # Adjust for authentication if needed
    serializer_class = IncidentReportSerializer
    parser_classes = (MultiPartParser, FormParser)
    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
class ClothingDonations(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]  # Adjust for authentication if needed
    serializer_class = ClothingDonationRequestSerializer
    parser_classes = (MultiPartParser, FormParser)
    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

#Email View
@csrf_exempt  # Remove in production; better to use proper CSRF handling
def contact_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            if not all([name, email, message]):
                return JsonResponse({'error': 'All fields are required.'}, status=400)

            subject = f"SHRAM New Contact Message from {name}"
            full_message = f"From: {name} <{email}>\n\n{message}"

            send_mail(
                subject,
                full_message,
                email,  # Sender
                ['techresofdev@gmail.com'],  # Receiver(s)
                fail_silently=False,
            )

            return JsonResponse({'success': 'Message sent successfully!'})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)