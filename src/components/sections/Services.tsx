import React, { useState } from "react";
import Phase_2 from "./Phase_2";
import {
  Heart,
  GraduationCap,
  Users,
  Camera,
  MapPin,
  Smartphone,
  BookOpen,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Construction,
  Upload,
  X,
  Image as ImageIcon,
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  Star,
  Award,
  ChevronDown,
  FileText,
  IndianRupee,
  School,
  UserCheck,
  Baby,
  Clipboard,
} from "lucide-react";

const Services = () => {
  const [showTrainingForm, setShowTrainingForm] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [showForceForm, setShowForceForm] = useState(false);
  const [showChildEducationForm, setShowChildEducationForm] = useState(false);
  const [showRTEEnrollmentForm, setShowRTEEnrollmentForm] = useState(false);
  const [childEducationType, setChildEducationType] = useState("");

  const [trainingForm, setTrainingForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    skill_interest: "",
    experience: "",
    preferred_schedule: "",
    has_basic_tools: false,
    monthly_income: "",
    motivation: "",
  });

  const [ForceForm, setForceForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    skill_interest: "",
    experience: "",
    preferred_schedule: "",
    has_basic_tools: false,
    monthly_income: "",
    motivation: "",
  });

  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    skill_needed: "",
    learning_goal: "",
    availability: "",
    preferred_mode: "online",
    urgency: "medium",
    background: "",
    specific_requirements: "",
  });

  const [reportForm, setReportForm] = useState({
    location: "",
    description: "",
    severity: "medium",
    images: [] as File[],
  });

  const [childEducationForm, setChildEducationForm] = useState({
    volunteer_name: "",
    volunteer_phone: "",
    volunteer_email: "",
    qualification: "",
    experience: "",
    subjects: "",
    age_group: "",
    availability: "",
    location: "",
    teaching_mode: "both",
    motivation: "",
  });

  const [rteEnrollmentForm, setRteEnrollmentForm] = useState({
    child_name: "",
    child_age: "",
    parent_name: "",
    parent_phone: "",
    parent_email: "",
    address: "",
    previous_schooling: "",
    documents: "",
    preferred_schools: "",
    special_needs: "",
    guardian_relation: "parent",
  });

  /*const handleTrainingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Training kit request submitted successfully! We will contact you within 2-3 business days with kit availability and pickup/delivery details."
    );
    setTrainingForm({
      name: "",
      phone: "",
      email: "",
      address: "",
      skillInterest: "",
      experience: "",
      preferredSchedule: "",
      hasBasicTools: false,
      monthlyIncome: "",
      motivation: "",
    });
    setShowTrainingForm(false);
  };*/

  const handleTrainingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://anupam123.pythonanywhere.com/trainingrequest_api/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(trainingForm),
        }
      );

      if (response.ok) {
        alert(
          "Training kit request submitted successfully! We will contact you within 2-3 business days with kit availability and pickup/delivery details."
        );
        // Optionally reset the form
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        alert("Error submitting form.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error.");
    }
  };

  /*const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Volunteer request submitted successfully! We are matching you with qualified volunteers in your area. You will receive contact details within 24 hours."
    );
    setVolunteerForm({
      name: "",
      phone: "",
      email: "",
      location: "",
      skillNeeded: "",
      learningGoal: "",
      availability: "",
      preferredMode: "online",
      urgency: "medium",
      background: "",
      specificRequirements: "",
    });
    setShowVolunteerForm(false);
  };*/

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://anupam123.pythonanywhere.com/volunteerrequest_api/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(volunteerForm),
        }
      );

      if (response.ok) {
        alert(
          "Volunteer request submitted successfully! We are matching you with qualified volunteers in your area. You will receive contact details within 24 hours."
        );
        // Optionally reset the form
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        alert("Error submitting form.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error.");
    }
  };

  /*const handleChildEducationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Volunteer registration submitted successfully! We will verify your credentials and contact you within 2-3 business days with teaching opportunities.');
    setChildEducationForm({
      volunteerName: '', volunteerPhone: '', volunteerEmail: '', qualification: '', 
      experience: '', subjects: '', ageGroup: '', availability: '', location: '', 
      teachingMode: 'both', motivation: ''
    });
    setShowChildEducationForm(false);
  };*/

  const handleChildEducationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://anupam123.pythonanywhere.com/childeducationvolunteer_api/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(childEducationForm),
        }
      );

      if (response.ok) {
        alert(
          "Volunteer registration submitted successfully! We will verify your credentials and contact you within 2-3 business days with teaching opportunities."
        );
        // Optionally reset the form
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        alert("Error submitting form.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error.");
    }
  };

  /*const handleRTEEnrollmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "RTE enrollment application submitted successfully! We will match the child with nearby schools having vacancies and contact you within 5-7 business days with admission details."
    );
    setRteEnrollmentForm({
      childName: "",
      childAge: "",
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      address: "",
      previousSchooling: "",
      documents: "",
      preferredSchools: "",
      specialNeeds: "",
      guardianRelation: "parent",
    });
    setShowRTEEnrollmentForm(false);
  };*/

  const handleRTEEnrollmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://anupam123.pythonanywhere.com/rteenrollment_api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rteEnrollmentForm),
      });

      if (response.ok) {
        alert(
          "RTE enrollment application submitted successfully! We will match the child with nearby schools having vacancies and contact you within 5-7 business days with admission details."
        );
        // Optionally reset the form
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        alert("Error submitting form.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error.");
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter((file) => {
      const isValidType = file.type.startsWith("image/");
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB limit
      return isValidType && isValidSize;
    });

    setReportForm((prev) => ({
      ...prev,
      images: [...prev.images, ...validFiles].slice(0, 3), // Max 3 images
    }));
  };

  const removeImage = (index: number) => {
    setReportForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  /*const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert(
      "Report submitted successfully! Nearby volunteers and NGOs have been notified."
    );
    setReportForm({
      location: "",
      description: "",
      severity: "medium",
      images: [],
    });
  };*/

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("location", reportForm.location);
      formData.append("severity", reportForm.severity);
      formData.append("description", reportForm.description);

      // Append images (if any)
      reportForm.images.forEach((file: File) => {
        formData.append("images", file);
      });

      const response = await fetch(
        "http://anupam123.pythonanywhere.com/incidentreport_api/",
        {
          method: "POST",
          body: formData, // let browser set Content-Type + boundary automatically
        }
      );

      if (response.ok) {
        alert(
          "Report submitted successfully! Nearby volunteers and NGOs have been notified."
        );
        // Optionally reset the form
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        alert("Error submitting form.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error.");
    }
  };

  const skillOptions = [
    "Electronics Repair",
    "Mobile Phone Repair",
    "Computer Hardware",
    "Tailoring & Sewing",
    "Plumbing",
    "Electrical Work",
    "Carpentry",
    "Cooking & Food Service",
    "Beauty & Grooming",
    "Digital Marketing",
    "Data Entry",
    "Handicrafts",
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions addressing health, education, and inequality
            through innovative approaches
          </p>
        </div>

        <div className="space-y-20">
          {/* Service 1: Health & Well-being */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-blue-600 p-3 rounded-xl mr-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Good Health & Well-being
                </h3>
                <p className="text-blue-600 font-semibold">SDG 3 Initiative</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Aushadi Platform Integration
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Ayurvedic remedies and preventive health tips
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Health awareness campaigns
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Collaboration with registered Ayurvedic practitioners
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h5 className="font-semibold text-gray-900 mb-3">
                  Health Resources
                </h5>
                <p className="text-gray-600 mb-4">
                  Access traditional wellness knowledge and preventive care
                  guidance.
                </p>
                <a
                  href="https://aushadi.free.nf/home.php"
                  target="_blank"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Explore Health Tips
                </a>
              </div>
            </div>
          </div>

          {/* Service 2: Quality Education */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-green-600 p-3 rounded-xl mr-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Quality Education & Employment Pathway
                </h3>
                <p className="text-green-600 font-semibold">SDG 4 Initiative</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Approach 1: Self Training Kits */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-green-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">
                    Self Training Kits
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Refurbished electronic/equipment kits
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Rental fee: ₹50/month
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Digital guides & multilingual videos
                  </li>
                </ul>
                <button
                  onClick={() => setShowTrainingForm(true)}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Request Training Kit
                </button>
              </div>

              {/* Approach 2: Volunteer-led Training */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">
                    Volunteer-led Training
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    1-to-1 teaching (online/local workshops)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    Post-training job deployment
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    College students as educators
                  </li>
                </ul>
                <button
                  onClick={() => setShowVolunteerForm(true)}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Find a Volunteer
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              {/* Approach 3: Find Employment */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-yellow-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">
                    Find Employment
                  </h4>
                </div>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    Join Distribution Channel
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    Join Manufacturing Unit
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                    Support your Community
                  </li>
                </ul>
                {/* <button
                  
                  className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Apply Now
                </button> */}
                <a
                  href="https://hack-heritage-2025-1.onrender.com/"
                  target="_blank"
                  className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors duration-200">
                    Learn More
                  </a>

                  <button
                  onClick={() => setShowForceForm(true)}
                  className="bg-green-600 text-white px-6 mx-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Join the Force
                </button>
              </div>
              
              
            </div>

            {/* Child Education Section */}
            <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-6">
                <School className="h-6 w-6 text-purple-600 mr-3" />
                <h4 className="text-2xl font-semibold text-gray-900">
                  Child Education Initiative
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Ensuring every child's right to education through qualified
                volunteer teaching and RTE Act school enrollment assistance.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Volunteer Teaching */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <UserCheck className="h-6 w-6 text-purple-600 mr-3" />
                    <h5 className="text-xl font-semibold text-gray-900">
                      Volunteer Teaching
                    </h5>
                  </div>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Pre-primary & primary education
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Qualified volunteer educators
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Digital platform integration
                    </li>
                  </ul>
                  <button
                    onClick={() => {
                      setChildEducationType("volunteer");
                      setShowChildEducationForm(true);
                    }}
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    Register as Volunteer
                  </button>
                </div>

                {/* RTE Enrollment */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <Baby className="h-6 w-6 text-pink-600 mr-3" />
                    <h5 className="text-xl font-semibold text-gray-900">
                      RTE Act Enrollment
                    </h5>
                  </div>
                  <ul className="space-y-3 text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Register vulnerable children
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Schools with vacancy matching
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Right to Education compliance
                    </li>
                  </ul>
                  <button
                    onClick={() => setShowRTEEnrollmentForm(true)}
                    className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors duration-200"
                  >
                    Enroll a Child
                  </button>
                </div>
              </div>
            </div>

            {/* Training Kit Request Modal */}
            {showTrainingForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Wrench className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            Request Training Kit
                          </h3>
                          <p className="text-gray-600">
                            Fill out this form to receive a skill development
                            kit
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowTrainingForm(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <form
                    onSubmit={handleTrainingSubmit}
                    className="p-6 space-y-6"
                  >
                    {/* Personal Information */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <User className="h-5 w-5 text-green-600 mr-2" />
                        Personal Information
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={trainingForm.name}
                            onChange={(e) =>
                              setTrainingForm({
                                ...trainingForm,
                                name: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              value={trainingForm.phone}
                              onChange={(e) =>
                                setTrainingForm({
                                  ...trainingForm,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="email"
                              value={trainingForm.email}
                              onChange={(e) =>
                                setTrainingForm({
                                  ...trainingForm,
                                  email: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Monthly Income Range
                          </label>
                          <div className="relative">
                            <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <select
                              value={trainingForm.monthly_income}
                              onChange={(e) =>
                                setTrainingForm({
                                  ...trainingForm,
                                  monthly_income: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            >
                              <option value="">Select income range</option>
                              <option value="0-5000">₹0 - ₹5,000</option>
                              <option value="5000-10000">
                                ₹5,000 - ₹10,000
                              </option>
                              <option value="10000-15000">
                                ₹10,000 - ₹15,000
                              </option>
                              <option value="15000+">₹15,000+</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Complete Address *
                        </label>
                        <textarea
                          value={trainingForm.address}
                          onChange={(e) =>
                            setTrainingForm({
                              ...trainingForm,
                              address: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          rows={2}
                          placeholder="Enter your complete address for kit delivery"
                          required
                        />
                      </div>
                    </div>

                    {/* Skill & Training Details */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Award className="h-5 w-5 text-blue-600 mr-2" />
                        Skill & Training Details
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Skill of Interest *
                          </label>
                          <select
                            value={trainingForm.skill_interest}
                            onChange={(e) =>
                              setTrainingForm({
                                ...trainingForm,
                                skill_interest: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            required
                          >
                            <option value="">Select a skill</option>
                            {skillOptions.map((skill) => (
                              <option key={skill} value={skill}>
                                {skill}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Schedule
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <select
                              value={trainingForm.preferred_schedule}
                              onChange={(e) =>
                                setTrainingForm({
                                  ...trainingForm,
                                  preferred_schedule: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            >
                              <option value="">Select schedule</option>
                              <option value="morning">
                                Morning (6 AM - 12 PM)
                              </option>
                              <option value="afternoon">
                                Afternoon (12 PM - 6 PM)
                              </option>
                              <option value="evening">
                                Evening (6 PM - 10 PM)
                              </option>
                              <option value="flexible">Flexible</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Previous Experience
                        </label>
                        <textarea
                          value={trainingForm.experience}
                          onChange={(e) =>
                            setTrainingForm({
                              ...trainingForm,
                              experience: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          rows={2}
                          placeholder="Describe any previous experience or skills you have"
                        />
                      </div>
                      <div className="mt-4">
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={trainingForm.has_basic_tools}
                            onChange={(e) =>
                              setTrainingForm({
                                ...trainingForm,
                                has_basic_tools: e.target.checked,
                              })
                            }
                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <span className="text-sm text-gray-700">
                            I have basic tools/workspace available
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Motivation */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Why do you want to learn this skill? *
                      </label>
                      <textarea
                        value={trainingForm.motivation}
                        onChange={(e) =>
                          setTrainingForm({
                            ...trainingForm,
                            motivation: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        rows={3}
                        placeholder="Tell us about your goals and how this skill will help you..."
                        required
                      />
                    </div>

                    {/* Kit Information */}
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-2">
                        Training Kit Information
                      </h5>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>
                          • Kit rental: ₹50/month (refundable security deposit:
                          ₹200)
                        </li>
                        <li>
                          • Includes: Refurbished equipment, tools, and digital
                          learning materials
                        </li>
                        <li>
                          • Duration: 3-6 months (extendable based on progress)
                        </li>
                        <li>
                          • Support: 24/7 helpline and online community access
                        </li>
                      </ul>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
                      >
                        Submit Request
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowTrainingForm(false)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Volunteer Request Modal */}
            {showVolunteerForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            Find a Volunteer
                          </h3>
                          <p className="text-gray-600">
                            Connect with qualified volunteers for personalized
                            training
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowVolunteerForm(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <form
                    onSubmit={handleVolunteerSubmit}
                    className="p-6 space-y-6"
                  >
                    {/* Personal Information */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <User className="h-5 w-5 text-blue-600 mr-2" />
                        Personal Information
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={volunteerForm.name}
                            onChange={(e) =>
                              setVolunteerForm({
                                ...volunteerForm,
                                name: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              value={volunteerForm.phone}
                              onChange={(e) =>
                                setVolunteerForm({
                                  ...volunteerForm,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="email"
                              value={volunteerForm.email}
                              onChange={(e) =>
                                setVolunteerForm({
                                  ...volunteerForm,
                                  email: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location/City *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              value={volunteerForm.location}
                              onChange={(e) =>
                                setVolunteerForm({
                                  ...volunteerForm,
                                  location: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your city/location"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Learning Requirements */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="h-5 w-5 text-green-600 mr-2" />
                        Learning Requirements
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Skill Needed *
                          </label>
                          <select
                            value={volunteerForm.skill_needed}
                            onChange={(e) =>
                              setVolunteerForm({
                                ...volunteerForm,
                                skill_needed: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="">Select skill to learn</option>
                            {skillOptions.map((skill) => (
                              <option key={skill} value={skill}>
                                {skill}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Mode *
                          </label>
                          <select
                            value={volunteerForm.preferred_mode}
                            onChange={(e) =>
                              setVolunteerForm({
                                ...volunteerForm,
                                preferred_mode: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="online">Online Sessions</option>
                            <option value="offline">In-Person Training</option>
                            <option value="hybrid">
                              Both Online & Offline
                            </option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Availability *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <select
                              value={volunteerForm.availability}
                              onChange={(e) =>
                                setVolunteerForm({
                                  ...volunteerForm,
                                  availability: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            >
                              <option value="">Select availability</option>
                              <option value="weekdays-morning">
                                Weekdays Morning
                              </option>
                              <option value="weekdays-evening">
                                Weekdays Evening
                              </option>
                              <option value="weekends">Weekends</option>
                              <option value="flexible">
                                Flexible Schedule
                              </option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Urgency Level
                          </label>
                          <div className="relative">
                            <Star className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <select
                              value={volunteerForm.urgency}
                              onChange={(e) =>
                                setVolunteerForm({
                                  ...volunteerForm,
                                  urgency: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="low">
                                Low - Can wait 2-3 weeks
                              </option>
                              <option value="medium">
                                Medium - Need within 1 week
                              </option>
                              <option value="high">
                                High - Need within 2-3 days
                              </option>
                              <option value="urgent">
                                Urgent - Need immediately
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Learning Goal *
                        </label>
                        <textarea
                          value={volunteerForm.learning_goal}
                          onChange={(e) =>
                            setVolunteerForm({
                              ...volunteerForm,
                              learning_goal: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          rows={2}
                          placeholder="What do you want to achieve with this skill?"
                          required
                        />
                      </div>
                    </div>

                    {/* Background & Requirements */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Educational Background
                      </label>
                      <textarea
                        value={volunteerForm.background}
                        onChange={(e) =>
                          setVolunteerForm({
                            ...volunteerForm,
                            background: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={2}
                        placeholder="Brief description of your educational background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specific Requirements
                      </label>
                      <textarea
                        value={volunteerForm.specific_requirements}
                        onChange={(e) =>
                          setVolunteerForm({
                            ...volunteerForm,
                            specific_requirements: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={2}
                        placeholder="Any specific requirements or preferences for the volunteer?"
                      />
                    </div>

                    {/* Volunteer Matching Info */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-blue-800 mb-2">
                        Volunteer Matching Process
                      </h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>
                          • We match you with qualified volunteers based on
                          skill, location, and availability
                        </li>
                        <li>
                          • All volunteers are verified college students or
                          professionals
                        </li>
                        <li>
                          • Free initial consultation to assess compatibility
                        </li>
                        <li>
                          • Flexible scheduling and progress tracking included
                        </li>
                        <li>
                          • Post-training job placement assistance available
                        </li>
                      </ul>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                      >
                        Find Volunteer
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowVolunteerForm(false)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/*  Force Modal */}
            {showForceForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            Join the Force
                          </h3>
                          <p className="text-gray-600">
                            Connect with SHRAM Technologies for a change
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowForceForm(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <form
                    onSubmit={handleVolunteerSubmit}
                    className="p-6 space-y-6"
                  >
                    {/* Personal Information */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <User className="h-5 w-5 text-blue-600 mr-2" />
                        Personal Information
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={volunteerForm.name}
                            onChange={(e) =>
                              setVolunteerForm({
                                ...volunteerForm,
                                name: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              value={volunteerForm.phone}
                              onChange={(e) =>
                                setVolunteerForm({
                                  ...volunteerForm,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="email"
                              value={volunteerForm.email}
                              onChange={(e) =>
                                setVolunteerForm({
                                  ...volunteerForm,
                                  email: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location/City *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              value={volunteerForm.location}
                              onChange={(e) =>
                                setVolunteerForm({
                                  ...volunteerForm,
                                  location: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your city/location"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Location Information */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="h-5 w-5 text-green-600 mr-2" />
                        Location Information
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Location
                          </label>
                          <select
                            value={volunteerForm.skill_needed}
                            onChange={(e) =>
                              setVolunteerForm({
                                ...volunteerForm,
                                skill_needed: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="">Select skill to learn</option>
                            {skillOptions.map((skill) => (
                              <option key={skill} value={skill}>
                                {skill}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mode of Transport Applicable
                          </label>
                          <select
                            value={volunteerForm.preferred_mode}
                            onChange={(e) =>
                              setVolunteerForm({
                                ...volunteerForm,
                                preferred_mode: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="online">On foot</option>
                            <option value="offline">Cycle</option>
                            <option value="hybrid">
                              Motorised Vehicle
                            </option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Availability *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <select
                              value={volunteerForm.availability}
                              onChange={(e) =>
                                setVolunteerForm({
                                  ...volunteerForm,
                                  availability: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            >
                              <option value="">Select availability</option>
                              <option value="weekdays-morning">
                                Weekdays Morning
                              </option>
                              <option value="weekdays-evening">
                                Weekdays Evening
                              </option>
                              <option value="weekends">Weekends</option>
                              <option value="flexible">
                                Flexible Schedule
                              </option>
                            </select>
                          </div>
                        </div>
                        {/* <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Urgency Level
                          </label>
                          <div className="relative">
                            <Star className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <select
                              value={volunteerForm.urgency}
                              onChange={(e) =>
                                setVolunteerForm({
                                  ...volunteerForm,
                                  urgency: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="low">
                                Low - Can wait 2-3 weeks
                              </option>
                              <option value="medium">
                                Medium - Need within 1 week
                              </option>
                              <option value="high">
                                High - Need within 2-3 days
                              </option>
                              <option value="urgent">
                                Urgent - Need immediately
                              </option>
                            </select>
                          </div>
                        </div> */}
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Constraints (if applicable)
                        </label>
                        <textarea
                          value={volunteerForm.learning_goal}
                          onChange={(e) =>
                            setVolunteerForm({
                              ...volunteerForm,
                              learning_goal: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          rows={2}
                          placeholder="What do you want to achieve with this skill?"
                          required
                        />
                      </div>
                    </div>

                    {/* Background & Requirements */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Urgency Level
                      </label>
                      <textarea
                        value={volunteerForm.background}
                        onChange={(e) =>
                          setVolunteerForm({
                            ...volunteerForm,
                            background: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={2}
                        placeholder="Brief description of how urgent is your need"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specific Requirements
                      </label>
                      <textarea
                        value={volunteerForm.specific_requirements}
                        onChange={(e) =>
                          setVolunteerForm({
                            ...volunteerForm,
                            specific_requirements: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={2}
                        placeholder="Manufacturing/Packaging/Delivery related requirements?"
                      />
                    </div>

                    {/* Volunteer Matching Info */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-blue-800 mb-2">
                        Force Joining Process
                      </h5>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>
                          • Applicants please keep documents ready!
                        </li>
                        <li>
                          • All partners are verified with proper background check
                        </li>
                        <li>
                          • Within 36-48 hours validation process
                        </li>
                        <li>
                          • Flexible scheduling and progress tracking included
                        </li>
                        {/* <li>
                          • Post-training job placement assistance available
                        </li> */}
                      </ul>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                      >
                        Join Force
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowVolunteerForm(false)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Child Education Volunteer Modal */}
            {showChildEducationForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <UserCheck className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            Register as Education Volunteer
                          </h3>
                          <p className="text-gray-600">
                            Help provide quality education to underprivileged
                            children
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowChildEducationForm(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <form
                    onSubmit={handleChildEducationSubmit}
                    className="p-6 space-y-6"
                  >
                    {/* Personal Information */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <User className="h-5 w-5 text-purple-600 mr-2" />
                        Personal Information
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={childEducationForm.volunteer_name}
                            onChange={(e) =>
                              setChildEducationForm({
                                ...childEducationForm,
                                volunteer_name: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              value={childEducationForm.volunteer_phone}
                              onChange={(e) =>
                                setChildEducationForm({
                                  ...childEducationForm,
                                  volunteer_phone: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="email"
                              value={childEducationForm.volunteer_email}
                              onChange={(e) =>
                                setChildEducationForm({
                                  ...childEducationForm,
                                  volunteer_email: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location/City *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              value={childEducationForm.location}
                              onChange={(e) =>
                                setChildEducationForm({
                                  ...childEducationForm,
                                  location: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              placeholder="Enter your city/location"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Qualification & Experience */}
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Award className="h-5 w-5 text-purple-600 mr-2" />
                        Qualification & Experience
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Highest Qualification *
                          </label>
                          <select
                            value={childEducationForm.qualification}
                            onChange={(e) =>
                              setChildEducationForm({
                                ...childEducationForm,
                                qualification: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            required
                          >
                            <option value="">Select qualification</option>
                            <option value="high-school">
                              High School (12th)
                            </option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="graduate">Graduate</option>
                            <option value="postgraduate">Post Graduate</option>
                            <option value="bed">B.Ed</option>
                            <option value="med">M.Ed</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Teaching Experience
                          </label>
                          <select
                            value={childEducationForm.experience}
                            onChange={(e) =>
                              setChildEducationForm({
                                ...childEducationForm,
                                experience: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          >
                            <option value="">Select experience</option>
                            <option value="none">No formal experience</option>
                            <option value="0-1">0-1 years</option>
                            <option value="1-3">1-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5+">5+ years</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Age Group *
                          </label>
                          <select
                            value={childEducationForm.age_group}
                            onChange={(e) =>
                              setChildEducationForm({
                                ...childEducationForm,
                                age_group: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            required
                          >
                            <option value="">Select age group</option>
                            <option value="pre-primary">
                              Pre-Primary (3-5 years)
                            </option>
                            <option value="primary">
                              Primary (6-10 years)
                            </option>
                            <option value="both">
                              Both Pre-Primary & Primary
                            </option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Teaching Mode *
                          </label>
                          <select
                            value={childEducationForm.teaching_mode}
                            onChange={(e) =>
                              setChildEducationForm({
                                ...childEducationForm,
                                teaching_mode: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            required
                          >
                            <option value="online">Online Only</option>
                            <option value="offline">In-Person Only</option>
                            <option value="both">
                              Both Online & In-Person
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subjects/Skills You Can Teach *
                        </label>
                        <textarea
                          value={childEducationForm.subjects}
                          onChange={(e) =>
                            setChildEducationForm({
                              ...childEducationForm,
                              subjects: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          rows={2}
                          placeholder="e.g., Basic Math, English, Hindi, Drawing, General Knowledge"
                          required
                        />
                      </div>
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability *
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <select
                          value={childEducationForm.availability}
                          onChange={(e) =>
                            setChildEducationForm({
                              ...childEducationForm,
                              availability: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                          required
                        >
                          <option value="">Select availability</option>
                          <option value="weekdays-morning">
                            Weekdays Morning (9 AM - 12 PM)
                          </option>
                          <option value="weekdays-afternoon">
                            Weekdays Afternoon (2 PM - 5 PM)
                          </option>
                          <option value="weekdays-evening">
                            Weekdays Evening (6 PM - 8 PM)
                          </option>
                          <option value="weekends">Weekends</option>
                          <option value="flexible">Flexible Schedule</option>
                        </select>
                      </div>
                    </div>

                    {/* Motivation */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Why do you want to volunteer for child education? *
                      </label>
                      <textarea
                        value={childEducationForm.motivation}
                        onChange={(e) =>
                          setChildEducationForm({
                            ...childEducationForm,
                            motivation: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        rows={3}
                        placeholder="Share your motivation and commitment to helping underprivileged children..."
                        required
                      />
                    </div>

                    {/* Volunteer Information */}
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h5 className="font-semibold text-yellow-800 mb-2">
                        Volunteer Program Information
                      </h5>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>
                          • Flexible scheduling based on your availability
                        </li>
                        <li>• Training and orientation provided</li>
                        <li>• Certificate of appreciation for service</li>
                        <li>• Ongoing support and mentorship</li>
                        <li>• Background verification required</li>
                      </ul>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
                      >
                        Register as Volunteer
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowChildEducationForm(false)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* RTE Enrollment Modal */}
            {showRTEEnrollmentForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-pink-100 p-2 rounded-lg">
                          <Baby className="h-6 w-6 text-pink-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            RTE Act School Enrollment
                          </h3>
                          <p className="text-gray-600">
                            Register a vulnerable child for school admission
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowRTEEnrollmentForm(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <form
                    onSubmit={handleRTEEnrollmentSubmit}
                    className="p-6 space-y-6"
                  >
                    {/* Child Information */}
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Baby className="h-5 w-5 text-pink-600 mr-2" />
                        Child Information
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Child's Full Name *
                          </label>
                          <input
                            type="text"
                            value={rteEnrollmentForm.child_name}
                            onChange={(e) =>
                              setRteEnrollmentForm({
                                ...rteEnrollmentForm,
                                child_name: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Enter child's full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Child's Age *
                          </label>
                          <select
                            value={rteEnrollmentForm.child_age}
                            onChange={(e) =>
                              setRteEnrollmentForm({
                                ...rteEnrollmentForm,
                                child_age: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            required
                          >
                            <option value="">Select age</option>
                            <option value="3">3 years</option>
                            <option value="4">4 years</option>
                            <option value="5">5 years</option>
                            <option value="6">6 years</option>
                            <option value="7">7 years</option>
                            <option value="8">8 years</option>
                            <option value="9">9 years</option>
                            <option value="10">10 years</option>
                            <option value="11">11 years</option>
                            <option value="12">12 years</option>
                            <option value="13">13 years</option>
                            <option value="14">14 years</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Previous Schooling Experience
                        </label>
                        <textarea
                          value={rteEnrollmentForm.previous_schooling}
                          onChange={(e) =>
                            setRteEnrollmentForm({
                              ...rteEnrollmentForm,
                              previous_schooling: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                          rows={2}
                          placeholder="Has the child attended school before? If yes, provide details..."
                        />
                      </div>
                    </div>

                    {/* Parent/Guardian Information */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <User className="h-5 w-5 text-gray-600 mr-2" />
                        Parent/Guardian Information
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Parent/Guardian Name *
                          </label>
                          <input
                            type="text"
                            value={rteEnrollmentForm.parent_name}
                            onChange={(e) =>
                              setRteEnrollmentForm({
                                ...rteEnrollmentForm,
                                parent_name: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            placeholder="Enter parent/guardian name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Relation to Child *
                          </label>
                          <select
                            value={rteEnrollmentForm.guardian_relation}
                            onChange={(e) =>
                              setRteEnrollmentForm({
                                ...rteEnrollmentForm,
                                guardian_relation: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            required
                          >
                            <option value="parent">Parent</option>
                            <option value="guardian">Legal Guardian</option>
                            <option value="relative">Relative</option>
                            <option value="ngo">NGO Representative</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              value={rteEnrollmentForm.parent_phone}
                              onChange={(e) =>
                                setRteEnrollmentForm({
                                  ...rteEnrollmentForm,
                                  parent_phone: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            <input
                              type="email"
                              value={rteEnrollmentForm.parent_email}
                              onChange={(e) =>
                                setRteEnrollmentForm({
                                  ...rteEnrollmentForm,
                                  parent_email: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Complete Address *
                        </label>
                        <textarea
                          value={rteEnrollmentForm.address}
                          onChange={(e) =>
                            setRteEnrollmentForm({
                              ...rteEnrollmentForm,
                              address: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                          rows={2}
                          placeholder="Enter complete residential address"
                          required
                        />
                      </div>
                    </div>

                    {/* School Preferences & Documents */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Clipboard className="h-5 w-5 text-blue-600 mr-2" />
                        School Preferences & Documents
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Schools/Areas
                          </label>
                          <textarea
                            value={rteEnrollmentForm.preferred_schools}
                            onChange={(e) =>
                              setRteEnrollmentForm({
                                ...rteEnrollmentForm,
                                preferred_schools: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            rows={2}
                            placeholder="List preferred schools or areas near your residence"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Available Documents
                          </label>
                          <textarea
                            value={rteEnrollmentForm.documents}
                            onChange={(e) =>
                              setRteEnrollmentForm({
                                ...rteEnrollmentForm,
                                documents: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            rows={2}
                            placeholder="List available documents (Birth Certificate, Aadhar, Income Certificate, etc.)"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Special Needs/Requirements
                          </label>
                          <textarea
                            value={rteEnrollmentForm.special_needs}
                            onChange={(e) =>
                              setRteEnrollmentForm({
                                ...rteEnrollmentForm,
                                special_needs: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                            rows={2}
                            placeholder="Any special needs, learning difficulties, or specific requirements"
                          />
                        </div>
                      </div>
                    </div>

                    {/* RTE Information */}
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-800 mb-2">
                        Right to Education (RTE) Act Benefits
                      </h5>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>
                          • Free and compulsory education for children aged 6-14
                          years
                        </li>
                        <li>
                          • 25% seats reserved in private schools for
                          economically weaker sections
                        </li>
                        <li>• No admission fees or capitation fees</li>
                        <li>• Free textbooks, uniforms, and mid-day meals</li>
                        <li>
                          • No detention policy until elementary education
                          completion
                        </li>
                      </ul>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transform hover:scale-105 transition-all duration-200"
                      >
                        Submit RTE Application
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowRTEEnrollmentForm(false)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* KHOJ Feature */}
            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-6">
                <Camera className="h-6 w-6 text-orange-600 mr-3" />
                <h4 className="text-2xl font-semibold text-gray-900">
                  KHOJ - Citizen Reporting Portal
                </h4>
              </div>
              <p className="text-gray-600 mb-6">
                Help us identify and assist children in need. Report cases of
                child labor or begging to connect them with nearby volunteers
                and NGOs.
              </p>

              <form
                onSubmit={handleReportSubmit}
                className="grid md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location Details
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={reportForm.location}
                      onChange={(e) =>
                        setReportForm({
                          ...reportForm,
                          location: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter location or address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Severity Level
                  </label>
                  <select
                    value={reportForm.severity}
                    onChange={(e) =>
                      setReportForm({ ...reportForm, severity: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={reportForm.description}
                    onChange={(e) =>
                      setReportForm({
                        ...reportForm,
                        description: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    rows={3}
                    placeholder="Describe the situation and any immediate needs..."
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Images (Optional)
                  </label>
                  <div className="space-y-4">
                    {/* Upload Area */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors duration-200">
                      <input
                        type="file"
                        id="image-upload"
                        multiple
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                      <label
                        htmlFor="image-upload"
                        className="cursor-pointer flex flex-col items-center space-y-2"
                      >
                        <div className="bg-orange-100 p-3 rounded-full">
                          <Upload className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Click to upload images
                          </p>
                          <p className="text-xs text-gray-500">
                            PNG, JPG up to 5MB each (max 3 images)
                          </p>
                        </div>
                      </label>
                    </div>

                    {/* Image Preview */}
                    {reportForm.images.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {reportForm.images.map((file, index) => (
                          <div key={index} className="relative group">
                            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Upload ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                            >
                              <X className="h-4 w-4" />
                            </button>
                            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                              {file.name.length > 15
                                ? `${file.name.substring(0, 15)}...`
                                : file.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Upload Guidelines */}
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <ImageIcon className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-orange-800">
                          <p className="font-medium mb-1">Image Guidelines:</p>
                          <ul className="space-y-1 text-xs">
                            <li>
                              • Clear photos help volunteers respond more
                              effectively
                            </li>
                            <li>
                              • Avoid including faces of minors for privacy
                              protection
                            </li>
                            <li>
                              • Focus on the situation rather than individuals
                            </li>
                            <li>
                              • Images are encrypted and only shared with
                              verified responders
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                  >
                    <AlertTriangle className="h-5 w-5" />
                    <span>Submit Report</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Service 3: Reduced Inequalities */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 p-3 rounded-xl mr-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Reduced Inequalities
                </h3>
                <p className="text-orange-600 font-semibold">
                  SDG 10 Initiative
                </p>
              </div>
            </div>

            {/* <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Construction className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                Phase 2 - Under Construction
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're developing a comprehensive recruitment portal that will
                directly connect underprivileged job seekers with employment
                opportunities, creating pathways out of poverty through
                sustainable income sources.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Direct Recruitment
                  </h5>
                  <p className="text-gray-600">
                    Connect job seekers directly with employers
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Skill Matching
                  </h5>
                  <p className="text-gray-600">
                    AI-powered job-skill compatibility
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Income Pathways
                  </h5>
                  <p className="text-gray-600">
                    Sustainable employment solutions
                  </p>
                </div>
              </div>
            </div> */}
            <Phase_2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
