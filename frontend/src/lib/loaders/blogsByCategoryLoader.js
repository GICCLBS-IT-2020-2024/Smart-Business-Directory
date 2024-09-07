import { createMainInstance } from "../axios";
import { errorHandler } from "../errorHandler";
import { getCachedData, setCachedData } from "../cachedData";

const instance = createMainInstance();

export async function blogsByCategoryLoader({ params }) {
  const category = params.category;
  const key = keyGenerateForBlogByCategory(category);
  const blogs = getCachedData(key);

  if (blogs) {
    return { blogs };
  }

  try {
    const res = await instance.get(`/blogs/blog-data/${category}`);
    setCachedData(key, res.data);
    return { blogs: res.data };
  } catch (error) {
    return { error: errorHandler(error) };
  }
}

export function keyGenerateForBlogByCategory(t) {
  return `blogs_by_category_${t}`;
}
