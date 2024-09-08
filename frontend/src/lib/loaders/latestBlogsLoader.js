import { createMainInstance } from "../axios";
import { errorHandler } from "../errorHandler";

const instance = createMainInstance();

export async function latestBlogsLoader() {
  try {
    const res = await instance.get("/blogs/blog-latest");
    return { blogs: res.data };
  } catch (error) {
    return { error: errorHandler(error) };
  }
}
