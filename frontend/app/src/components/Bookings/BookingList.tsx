import React from "react";
import Link from "next/link";

export interface Booking {
  id: number;
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string;
}

interface BookingListProps {
  data: Booking[];
}

const formatDate = (dateString: string) => {
  return dateString?.split("T")[0];
};

export const BookingList = ({ data }: BookingListProps) => {
  return (
    <ul className="space-y-4">
      {data?.map((booking) => (
        <li key={booking.id} className="bg-white shadow-md rounded-lg p-4">
          <Link
            href={`/booking/${booking.id}`}
            className="text-[#84858b] hover:text-[#0d4058]"
          >
            A Booking on {formatDate(booking.date)} starting at{" "}
            {booking.start_time}
          </Link>
        </li>
      ))}
    </ul>
  );
};
