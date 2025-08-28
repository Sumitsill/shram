import React, { useState } from "react";
import { MapPin, Upload, Shirt, AlertCircle, X } from "lucide-react";

function PradanDonation() {
  const [clothingForm, setClothingForm] = useState({
    location: "",
    priority: "",
    clothing_details: "",
    condition: "",
    description: "",
    pradanImages: [] as File[],
  });

  // --- Image Handling only for PRADAN ---
  const handlePradanImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => {
      const isValidType = file.type.startsWith("image/");
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
      return isValidType && isValidSize;
    });

    setClothingForm((prev) => ({
      ...prev,
      pradanImages: [...prev.pradanImages, ...validFiles].slice(0, 3), // max 3 images
    }));
  };

  const removePradanImage = (index: number) => {
    setClothingForm((prev) => ({
      ...prev,
      pradanImages: prev.pradanImages.filter((_, i) => i !== index),
    }));
  };

  const handleClothingDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("location", clothingForm.location);
      formData.append("priority", clothingForm.priority);
      formData.append("clothing_details", clothingForm.clothing_details);
      formData.append("condition", clothingForm.condition);
      formData.append("description", clothingForm.description);

      clothingForm.pradanImages.forEach((file: File) => {
        formData.append("images", file);
      });

      const response = await fetch("http://anupam123.pythonanywhere.com/clothingdonations_api/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Clothing donations details submitted. We will connect with you within 2-3 business days.");
        // reset if needed
        setClothingForm({
          location: "",
          priority: "",
          clothing_details: "",
          condition: "",
          description: "",
          pradanImages: [],
        });
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

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Shirt className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">
              PRADAN - Citizen Donation Portal
            </h1>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Help us collect and distribute unused clothes to the needy and
            beggars through volunteers and NGOs. Your donations make a direct
            impact on those who need warm clothing and basic necessities.
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <form onSubmit={handleClothingDonationSubmit} className="space-y-8">
            {/* Location + Priority */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Location Details
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={clothingForm.location}
                    onChange={(e) => setClothingForm({ ...clothingForm, location: e.target.value })}
                    placeholder="Enter location or address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Priority Level
                </label>
                <select
                  value={clothingForm.priority}
                  onChange={(e) => setClothingForm({ ...clothingForm, priority: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700 transition-colors"
                >
                  <option value="">Select Priority</option>
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
                </select>
              </div>
            </div>

            {/* Clothing Details + Condition */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Clothing Type & Quantity
                </label>
                <textarea
                  value={clothingForm.clothing_details}
                  onChange={(e) => setClothingForm({ ...clothingForm, clothing_details: e.target.value })}
                  placeholder="e.g., 5 shirts (size M), 3 pants (size L), 2 blankets, 1 winter jacket..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 resize-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Condition of Clothes
                </label>
                <select
                  value={clothingForm.condition}
                  onChange={(e) => setClothingForm({ ...clothingForm, condition: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700 transition-colors"
                >
                  <option value="">Select Condition</option>
                  <option value="new">New</option>
                  <option value="gently-used">Gently Used</option>
                  <option value="needs-repair">Needs Repair</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Description
              </label>
              <textarea
                value={clothingForm.description}
                onChange={(e) => setClothingForm({ ...clothingForm, description: e.target.value })}
                placeholder="Additional notes about sizes, special needs, pickup preferences, or any other relevant information..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400 resize-none transition-colors"
              />
            </div>

            {/* Upload Images (ONLY PRADAN) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Images (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-orange-300 transition-colors">
                <input
                  type="file"
                  id="pradan-image-upload"
                  multiple
                  accept="image/png,image/jpeg"
                  onChange={handlePradanImageUpload}
                  className="hidden"
                />
                <label
                  htmlFor="pradan-image-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-lg font-medium text-gray-700 mb-1">
                    Click to upload images
                  </p>
                  <p className="text-sm text-gray-500">
                    PNG, JPG up to 5MB each (max 3 images)
                  </p>
                </label>
              </div>

              {/* Preview only PRADAN images */}
              {clothingForm.pradanImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {clothingForm.pradanImages.map((file, index) => (
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
                        onClick={() => removePradanImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        {file.name.length > 15 ? `${file.name.substring(0, 15)}...` : file.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Guidelines */}
              <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-orange-800 mb-2">
                      Image Guidelines:
                    </h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Clear photos help volunteers identify clothes better</li>
                      <li>• Avoid including personal items in the background</li>
                      <li>• Focus on the clothing items and their condition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Submit Donation Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PradanDonation;
