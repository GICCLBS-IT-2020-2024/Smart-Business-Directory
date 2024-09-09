import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/store/states/userData";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";

export default function useDeleteAccount() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance(false, token);

  async function deleteAccount() {
    console.log("as");
    setIsLoading(true);
    setError({});
    try {
      await userInstance.delete("/");
      dispatch(logOut());
      return true;
    } catch (error) {
      console.log(error, "useDeleteAccount");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }
  return { isLoading, error, deleteAccount };
}
