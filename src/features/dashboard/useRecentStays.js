import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  // the subday subtract the current days from the previous day to get the number of days
  //the function needs an ISOstring..
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    //call backfunction
    queryFn: () => getBookingsAfterDate(queryDate),
    //add the valus that changes in the array like the dependency array
    queryKey: ["stays", `last-${numDays}`],
  });

  const confirmStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { isLoading, stays, confirmStays, numDays };
}
