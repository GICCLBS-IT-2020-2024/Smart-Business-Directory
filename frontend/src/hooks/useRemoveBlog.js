import { useState } from "react";
import { useSelector } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";

export default function useRemoveBlog() {
  const { token } = useSelector((state) => state.userData.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  const userInstance = createMainInstance(true, token);

  async function removeBlog(id) {
    setIsLoading(true);
    setError({});
    try {
      const res = await userInstance.delete(`/blogs/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error, "useRemoveBlog");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, removeBlog };
}
