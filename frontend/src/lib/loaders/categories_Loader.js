import { createMainInstance } from "../axios";
import { errorHandler } from "../errorHandler";

const instance = createMainInstance();

export async function CategoriesLoader() {
  try {
    const res = await instance.get("/category");
    return { category: res.data };
  } catch (error) {
    return { error: errorHandler(error) };
  }
}
