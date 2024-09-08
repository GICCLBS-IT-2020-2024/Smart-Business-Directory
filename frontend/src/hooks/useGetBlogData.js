import { useState } from "react";
import { useSelector } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";

export default function useGetBlogData() {
  const { token } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance(true, token);

  async function getBlogs() {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.get("blogs/blog-data/");
      return res.data;
    } catch (error) {
      console.log(error, "useGetBlogData");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, getBlogs };
}
