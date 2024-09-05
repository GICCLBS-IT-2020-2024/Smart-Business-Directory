import { useState } from "react";
import { useSelector } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";

export default function useAddBlogArticle() {
  const { token } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance(true, token);

  async function addArticle(data) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.patch("/blogs/blog-article", data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error, "useAddBusiness");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  function resetError() {
    setError({});
  }

  return { isLoading, error, addArticle, resetError };
}
