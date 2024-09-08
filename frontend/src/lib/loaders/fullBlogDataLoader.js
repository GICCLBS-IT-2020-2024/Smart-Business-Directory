import { createMainInstance } from "../axios";
import { errorHandler } from "../errorHandler";
import { getCachedData, setCachedData } from "../cachedData";

export async function fullBlogDataLoader({ params }) {
  const token = localStorage.getItem("token");

  const instance = createMainInstance(false, token);
  const blogId = params.blogId;
  const key = keyGenerateForBlogToEdit(blogId);
  const blog = getCachedData(key);

  if (blog) {
    return { blog };
  }

  try {
    const res = await instance.get(`/blogs/${blogId}`);
    setCachedData(key, res.data);
    return { blog: res.data };
  } catch (error) {
    return { error: errorHandler(error) };
  }
}

export function keyGenerateForBlogToEdit(t) {
  return `fullBlogData_${t}`;
}
