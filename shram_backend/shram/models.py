from django.db import models

class ChildEducationVolunteer(models.Model):
    QUALIFICATIONS = [
        ('high-school', 'High School (12th)'),
        ('undergraduate', 'Undergraduate'),
        ('graduate', 'Graduate'),
        ('postgraduate', 'Post Graduate'),
        ('bed', 'B.Ed'),
        ('med', 'M.Ed'),
        ('other', 'Other'),
    ]

    EXPERIENCE_CHOICES = [
        ('none', 'No formal experience'),
        ('0-1', '0-1 years'),
        ('1-3', '1-3 years'),
        ('3-5', '3-5 years'),
        ('5+', '5+ years'),
    ]

    AGE_GROUP_CHOICES = [
        ('pre-primary', 'Pre-Primary (3-5 years)'),
        ('primary', 'Primary (6-10 years)'),
        ('both', 'Both Pre-Primary & Primary'),
    ]

    TEACHING_MODE_CHOICES = [
        ('online', 'Online Only'),
        ('offline', 'In-Person Only'),
        ('both', 'Both Online & In-Person'),
    ]

    AVAILABILITY_CHOICES = [
        ('weekdays-morning', 'Weekdays Morning (9 AM - 12 PM)'),
        ('weekdays-afternoon', 'Weekdays Afternoon (2 PM - 5 PM)'),
        ('weekdays-evening', 'Weekdays Evening (6 PM - 8 PM)'),
        ('weekends', 'Weekends'),
        ('flexible', 'Flexible Schedule'),
    ]

    # Personal Information
    volunteer_name = models.CharField(max_length=100)
    volunteer_phone = models.CharField(max_length=20, unique=True)
    volunteer_email = models.EmailField()
    location = models.CharField(max_length=100)

    # Qualification & Experience
    qualification = models.CharField(max_length=20, choices=QUALIFICATIONS)
    experience = models.CharField(max_length=10, choices=EXPERIENCE_CHOICES, blank=True)
    age_group = models.CharField(max_length=20, choices=AGE_GROUP_CHOICES)
    teaching_mode = models.CharField(max_length=10, choices=TEACHING_MODE_CHOICES)
    subjects = models.TextField()

    # Availability & Motivation
    availability = models.CharField(max_length=30, choices=AVAILABILITY_CHOICES)
    motivation = models.TextField()

    # Metadata
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.volunteer_name} - {self.volunteer_email}"
    

class TrainingRequest(models.Model):
    # Personal Info
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20, unique=True)
    email = models.EmailField(blank=True, null=True)
    monthly_income = models.CharField(max_length=20, blank=True, null=True)
    address = models.TextField()

    # Skill & Training
    skill_interest = models.CharField(max_length=100)
    preferred_schedule = models.CharField(max_length=50, blank=True, null=True)
    experience = models.TextField(blank=True, null=True)
    has_basic_tools = models.BooleanField(default=False)

    # Motivation
    motivation = models.TextField()

    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.skill_interest}"


class VolunteerRequest(models.Model):
    # Personal Information
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True, null=True)
    location = models.CharField(max_length=100)

    # Learning Requirements
    skill_needed = models.CharField(max_length=100)
    preferred_mode = models.CharField(max_length=20, choices=[
        ('online', 'Online Sessions'),
        ('offline', 'In-Person Training'),
        ('hybrid', 'Both Online & Offline'),
    ])
    availability = models.CharField(max_length=30, choices=[
        ('weekdays-morning', 'Weekdays Morning'),
        ('weekdays-evening', 'Weekdays Evening'),
        ('weekends', 'Weekends'),
        ('flexible', 'Flexible Schedule'),
    ])
    urgency = models.CharField(max_length=20, choices=[
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('urgent', 'Urgent'),
    ], blank=True, null=True)
    learning_goal = models.TextField()

    # Background & Specific Needs
    background = models.TextField(blank=True, null=True)
    specific_requirements = models.TextField(blank=True, null=True)

    # Meta info
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.skill_needed}"

class RTEEnrollment(models.Model):
    # Child Information
    child_name = models.CharField(max_length=100)
    child_age = models.IntegerField()
    previous_schooling = models.TextField(blank=True, null=True)

    # Parent/Guardian Information
    parent_name = models.CharField(max_length=100)
    guardian_relation = models.CharField(max_length=20, choices=[
        ('parent', 'Parent'),
        ('guardian', 'Legal Guardian'),
        ('relative', 'Relative'),
        ('ngo', 'NGO Representative'),
        ('other', 'Other'),
    ])
    parent_phone = models.CharField(max_length=20)
    parent_email = models.EmailField(blank=True, null=True)
    address = models.TextField()

    # School Preferences & Documents
    preferred_schools = models.TextField(blank=True, null=True)
    documents = models.TextField(blank=True, null=True)
    special_needs = models.TextField(blank=True, null=True)

    # Meta
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.child_name} ({self.child_age} yrs) - {self.parent_name}"
    
# KHOJ
class IncidentReport(models.Model):
    SEVERITY_CHOICES = [
        ('low', 'Low Priority'),
        ('medium', 'Medium Priority'),
        ('high', 'High Priority'),
        ('urgent', 'Urgent'),
    ]

    location = models.CharField(max_length=255)
    severity = models.CharField(max_length=10, choices=SEVERITY_CHOICES)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.location} - {self.severity}"
    
def report_image_upload_path(instance, filename):
    return f"incident_reports/{instance.report.id}/{filename}"

class IncidentImage(models.Model):
    report = models.ForeignKey(IncidentReport, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=report_image_upload_path)
    uploaded_at = models.DateTimeField(auto_now_add=True)



#PRADAN

class ClothingDonationRequest(models.Model):

    # Priority Choices
    PRIORITY_CHOICES = [
        ('high', 'High Priority'),
        ('medium', 'Medium Priority'),
        ('low', 'Low Priority'),
    ]

    # Condition Choices
    CONDITION_CHOICES = [
        ('new', 'New'),
        ('gently-used', 'Gently Used'),
        ('needs-repair', 'Needs Repair'),
    ]
    location = models.CharField(max_length=255)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES)
    clothing_details = models.TextField(help_text="Types and quantities of clothing")
    condition = models.CharField(max_length=20, choices=CONDITION_CHOICES)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Donation at {self.location} ({self.priority})"


# Function to define upload path
def clothing_image_upload_path(instance, filename):
    return f"clothing_donations/{instance.donation.id}/{filename}"

class ClothingImage(models.Model):
    donation = models.ForeignKey(ClothingDonationRequest, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to=clothing_image_upload_path)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image for Donation ID {self.donation.id}"