import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler } from "@/lib/errorHandler";
import { createMainInstance } from "@/lib/axios";
import { editCategory as editCategoryState } from "@/store/states/categories";

export default function useEditCategory() {
  const { token, userData } = useSelector((state) => state.userData.data);
  const [categoryOptions] = useSelector((state) => [state.categories]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const userInstance = createMainInstance(true, token);

  async function editCategory(data) {
    setIsLoading(true);
    setError({});
    try {
      if (
        data.category ===
        categoryOptions.find((category) => category.value === data.id).label
      ) {
        return true;
      }
      const res = await userInstance.patch("/category", data);
      console.log(res.data);
      dispatch(editCategoryState(res.data));
      return true;
    } catch (error) {
      console.log(error, "useEditCategory");
      setError(errorHandler(error));
    } finally {
      setIsLoading(false);
    }
  }

  function resetError() {
    setError({});
  }
  return { isLoading, error, editCategory, resetError };
}
