import { useState } from "react";
import { useSelector } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";

export default function useAddBlogImg() {
  const { token } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance(false, token);

  async function uploadImg(formData) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.patch("/blogs/blog-image", formData);
      return res.data;
    } catch (error) {
      console.error(error, "useAddBlogImg");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }
  return { isLoading, error, uploadImg };
}
