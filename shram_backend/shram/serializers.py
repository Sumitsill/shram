from rest_framework import serializers
from .models import *
# from django.contrib.auth import get_user_model

model1 = ChildEducationVolunteer
model2 = TrainingRequest
model3 = VolunteerRequest
model4 = RTEEnrollment
model5 = IncidentImage
model6 = IncidentReport

class ChildEducationVolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = model1
        fields = '__all__'
        

class TrainingRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = model2
        fields = '__all__'

class VolunteerRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = model3
        fields = '__all__'

class RTEEnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = model4
        fields = '__all__'

#KHOJ
class IncidentImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = model5
        fields = ['id', 'image', 'uploaded_at']


class IncidentReportSerializer(serializers.ModelSerializer):
    images = serializers.ListField(
        child=serializers.ImageField(),
        write_only=True,
        required=False
    )
    uploaded_images = IncidentImageSerializer(many=True, read_only=True, source='images')

    class Meta:
        model = model6
        fields = [
            'id',
            'location',
            'severity',
            'description',
            'created_at',
            'images',           # For upload
            'uploaded_images',  # For read-only preview
        ]
        read_only_fields = ['created_at']

    def create(self, validated_data):
        image_files = validated_data.pop('images', [])
        report = model6.objects.create(**validated_data)

        # Optional: Enforce max 3 images
        if len(image_files) > 3:
            raise serializers.ValidationError("You can upload a maximum of 3 images.")

        for image in image_files:
            IncidentImage.objects.create(report=report, image=image)

        return report
    
#PRADAN
class ClothingImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClothingImage
        fields = ['id', 'image', 'uploaded_at']


class ClothingDonationRequestSerializer(serializers.ModelSerializer):
    # For uploading images via POST
    images = serializers.ListField(
        child=serializers.ImageField(),
        write_only=True,
        required=False
    )
    
    # For displaying images via GET
    uploaded_images = ClothingImageSerializer(source='images', many=True, read_only=True)

    class Meta:
        model = ClothingDonationRequest
        fields = [
            'id',
            'location',
            'priority',
            'clothing_details',
            'condition',
            'description',
            'created_at',
            'images',            # write-only (POST)
            'uploaded_images',   # read-only (GET)
        ]
        read_only_fields = ['created_at']

    def create(self, validated_data):
        image_files = validated_data.pop('images', [])
        
        # Optional image count validation
        if len(image_files) > 3:
            raise serializers.ValidationError("You can upload a maximum of 3 images.")
        
        donation = ClothingDonationRequest.objects.create(**validated_data)
        
        for image in image_files:
            ClothingImage.objects.create(donation=donation, image=image)
        
        return donation