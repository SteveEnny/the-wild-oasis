import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // const { booking, isLoading}
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) => {
      // console.log("working");
      return updateBooking(bookingId, {
        status: "checked-in",
        isPaid: false,
        ...breakfast,
      });
    },

    onSuccess: (data) => {
      console.log(data);
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error("There was an error in checking in"),
  });
  // const mutation = useMutation();
  // console.log(mutation);
  return { checkin, isCheckingIn };
}
