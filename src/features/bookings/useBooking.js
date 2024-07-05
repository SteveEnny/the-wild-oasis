import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams, useSearchParams } from "react-router-dom";

export function useBooking() {
  // const [searchParams] = useSearchParams("");
  const { bookingId } = useParams();
  console.log(2);
  const {
    data: booking,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false, // this funtion returns a promise
  });
  // React query trys to feach the data three times in case it fails in the begining  but setting th retry to false set makes the query try to fetch it ones
  return { booking, isLoading, error };
}
