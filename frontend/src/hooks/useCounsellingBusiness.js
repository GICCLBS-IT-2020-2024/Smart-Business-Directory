import { useState } from "react";
import { errorHandler } from "@/lib/errorHandler";
import { createAIInstance } from "@/lib/axios";

export default function useCounsellingBusiness() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createAIInstance(true);

  async function businessCounselling(data) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.patch("/category", data);
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error, "useCounsellingBusiness");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  function resetError() {
    setError({});
  }
  return { isLoading, error, businessCounselling, resetError };
}
