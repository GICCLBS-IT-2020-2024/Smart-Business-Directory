import { useLoaderData } from "react-router-dom";
import BlogInfo from "@/components/sections/BlogInfo";

export default function Business() {
  const { blog } = useLoaderData();
  console.log(blog);
  return (
    <div className="flex-grow my-section space-y-8">
      <BlogInfo data={blog} />
      <section>
        <div dangerouslySetInnerHTML={{ __html: blog.blog }} />
      </section>
    </div>
  );
}
