import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Users,
  Building,
  Globe,
} from "lucide-react";

const Contact = () => {
  const [ContactUsForm, setContactUsForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  /*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Thank you for your message! We\'ll get back to you soon.');
    setForm({ name: '', email: '', message: '' });
  };*/

  const handleContactUsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/contactus_api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ContactUsForm),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.success);
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactUsForm({
      ...ContactUsForm,
      [e.target.name]: e.target.value,
    });
  };

  // Mock NGO and volunteer locations
  const locations = [
    {
      name: "NGO Hope Foundation",
      type: "NGO",
      lat: 28.6139,
      lng: 77.209,
      contact: "+91 6290326545",
    },
    {
      name: "Volunteer Center Delhi",
      type: "Volunteer Hub",
      lat: 28.5355,
      lng: 77.391,
      contact: "+91 6290326545",
    },
    {
      name: "Skills Training Center",
      type: "Training",
      lat: 28.4595,
      lng: 77.0266,
      contact: "+91 6290326545",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to bridge child welfare and education. Connect with
            our network of volunteers, NGOs, and change-makers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleContactUsSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={ContactUsForm.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={ContactUsForm.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={ContactUsForm.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Tell us about your interest in SHRAM, how you'd like to help, or any questions you have..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Network
              </h3>
              <p className="text-gray-600 mb-6">
                Connect with our growing network of NGOs, volunteers, and
                training centers across the region.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>contact@shram.org</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>+91 6290326545</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Globe className="h-5 w-5 text-orange-600" />
                  <span>www.shram.org</span>
                </div>
              </div>
            </div>

            {/* Network Locations */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-5 w-5 text-red-500 mr-2" />
                Network Locations
              </h3>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {location.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">
                          {location.type}
                        </p>
                        <p className="text-sm text-gray-500">
                          {location.contact}
                        </p>
                      </div>
                      <div className="ml-4">
                        {location.type === "NGO" && (
                          <Building className="h-5 w-5 text-blue-500" />
                        )}
                        {location.type === "Volunteer Hub" && (
                          <Users className="h-5 w-5 text-green-500" />
                        )}
                        {location.type === "Training" && (
                          <Globe className="h-5 w-5 text-orange-500" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Interactive Map Integration:</strong> In the full
                  implementation, this section would feature Google Maps with
                  clickable markers showing real NGO and volunteer locations,
                  contact information, and availability status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
