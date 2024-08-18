"use client";
import "../../app/globals.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { convertToAMPMFormat } from "@/utils/time";

const AddBooking: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    service: "",
    doctor_name: "",
    date: "",
    start_time: "",
    end_time: "",
  });
  const [error, setError] = useState<string>();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formatData = {
      ...formData,
      start_time: convertToAMPMFormat(formData.start_time),
      end_time: convertToAMPMFormat(formData.end_time),
    };
    try {
      const res = await fetch("http://localhost:5050/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formatData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(`Error: ${errorData.message}`);
        return;
      }

      router.push("/");
    } catch (error) {
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="add container mx-auto p-4 border border-[#0d4058] rounded-lg">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Service</label>
          <input
            type="text"
            placeholder="Service A"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-[#0d4058] rounded-md bg-white text-[#0d4058]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Doctor Name</label>
          <input
            type="text"
            placeholder="Dr. Name"
            name="doctor_name"
            value={formData.doctor_name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-[#0d4058] rounded-md bg-white text-[#0d4058]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Start Time</label>
          <input
            type="time"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-[#0d4058] rounded-md bg-white text-[#0d4058]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">End Time</label>
          <input
            type="time"
            name="end_time"
            value={formData.end_time}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-[#0d4058] rounded-md bg-white text-[#0d4058]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-[#0d4058] rounded-md bg-white text-[#0d4058]"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#0d4058] text-white py-2 rounded-md hover:bg-[#82a8ba] hover:text-white"
        >
          Add Booking
        </button>
      </form>
    </div>
  );
};

export default AddBooking;
