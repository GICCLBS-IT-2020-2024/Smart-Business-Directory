import { useState } from "react";
import { errorHandler } from "@/lib/errorHandler";
import { createAIInstance } from "@/lib/axios";

export default function useChatBiz() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const aiInstance = createAIInstance();

  async function chat(data) {
    setIsLoading(true);
    setError({});
    try {
      const res = await aiInstance.post("/api/chat/", data);
      console.log(data);
      return true;
    } catch (error) {
      console.log(error, "useChatBiz");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, chat };
}
