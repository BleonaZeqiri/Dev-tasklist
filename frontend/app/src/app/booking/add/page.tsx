import React from "react";
import BookingForm from "../../../components/BookingForm/BookingForm";

const AddBooking: React.FC = () => {
  return (
    <div className="container mx-auto  p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#0d4058] text-center text-[34px] p-[47px]">
        Add Booking
      </h1>
      <BookingForm />
      <div className="mt-4"></div>
    </div>
  );
};

export default AddBooking;
