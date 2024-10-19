import { useState } from "react";
import { useDispatch } from "react-redux";
import { marked } from "marked";
import { errorHandler } from "@/lib/errorHandler";
import { createAIInstance } from "@/lib/axios";
import { addMessage, updateBotLastMessage } from "@/store/states/chatsStatus";

export default function useChatBiz() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const aiInstance = createAIInstance();

  async function chat(data) {
    dispatch(
      addMessage({
        bot: { message: "", loading: true, error: "" },
        client: { message: data.message },
      })
    );
    setIsLoading(true);
    setError({});
    try {
      const res = await aiInstance.post("/api/chat/", data);
      dispatch(
        updateBotLastMessage({
          bot: {
            message: marked(res?.data?.response || ""),
            loading: false,
            error: "",
          },
        })
      );
      return true;
    } catch (error) {
      console.error(error, "useChatBiz");
      dispatch(
        updateBotLastMessage({
          bot: {
            message: "",
            loading: false,
            error: "<span>Something went wrong while getting response</span>",
          },
        })
      );
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, chat };
}
