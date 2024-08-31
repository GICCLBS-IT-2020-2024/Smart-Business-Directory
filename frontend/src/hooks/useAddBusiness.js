import { useState } from "react";
import { useSelector } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";

export default function useAddBusiness() {
  const { token } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance(true, token);

  async function addBusiness(data) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.post("/blogs", data);
      console.log(res.data);
      return true;
    } catch (error) {
      console.log(error, "useEditUsername");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  function resetError() {
    setError({});
  }

  return { isLoading, error, addBusiness, resetError };
}
