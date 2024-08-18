import Link from "next/link";

async function getBooking(id: string) {
  const res = await fetch(
    `http://host.docker.internal:5050/api/bookings/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const SingleBooking: React.FC = async ({
  params,
}: {
  params: { bookingId: string };
}) => {
  const booking = await getBooking(params.bookingId);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#0d4058]">
        Booking Details
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg">
          This Booking is with:{" "}
          <span className="font-semibold"> {booking?.doctor_name}</span>
        </p>
        <p className="text-lg">
          For: <span className="font-semibold">{booking?.service}</span>
        </p>
        <p className="text-lg">
          It ends on: <span className="font-semibold">{booking?.end_time}</span>
        </p>
      </div>
      <Link
        href="/"
        className="inline-block mt-4 bg-[#0d4058] text-white px-4 py-2 rounded hover:bg-[#1d526a]"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default SingleBooking;
