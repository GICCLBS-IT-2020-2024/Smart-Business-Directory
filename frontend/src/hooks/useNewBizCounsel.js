import { useState } from "react";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";

export default function useCounselNewBusiness() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance();

  async function counselNewBiz(data) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.post("/counselling", data);
      return res.data;
    } catch (error) {
      console.error(error, "useCounselNewBusiness");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  function resetError() {
    setError({});
  }

  return { isLoading, error, counselNewBiz, resetError };
}
