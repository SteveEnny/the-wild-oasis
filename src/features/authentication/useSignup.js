import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading: isSigningup } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successflly created Please verify the new acount from the user address"
      );
    },
    onError: () => {
      toast.error("Unable to signup");
    },
  });

  return { signup, isSigningup };
}
