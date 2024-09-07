import { useLoaderData } from "react-router-dom";
import BlogCard from "@/components/common/BlogCard";
import ErrorBlock from "@/components/common/ErrorBlock";
import isEmptyObject from "@/lib/isEmptyObject";
import DataNotFound from "@/components/common/DataNotFound";

export default function BlogByCategory() {
  const { blogs, error } = useLoaderData();

  if (error) {
    return (
      <ErrorBlock
        msg={isEmptyObject(error) ? "Sorry we are facing an issue" : error.msg}
      />
    );
  }

  if (blogs.length === 0) {
    return (
      <DataNotFound msg="Sorry we don`t have the blogs from this category." />
    );
  }

  return (
    <section className="flex flex-grow my-section">
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 gap-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} data={blog} />
        ))}
      </div>
    </section>
  );
}
