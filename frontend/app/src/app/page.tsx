import { BookingList } from "@/components/Bookings/BookingList";

async function getBookings() {
  const res = await fetch("http://host.docker.internal:5050/api/bookings", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4  text-[#0d4058] ">Bookings</h1>
      <BookingList data={bookings} />
    </div>
  );
};

export default Home;
