import { useEffect, useState } from "react";
import { SquarePlus } from "lucide-react";
import { Link } from "react-router-dom";
import useGetBlogData from "@/hooks/useGetBlogData";
import { Button } from "@/components/ui/button";
import BlogTable from "@/components/tables/BlogTable";
import Spinner from "@/components/common/Spinner";
import isEmptyObject from "@/lib/isEmptyObject";

export default function ManageBlogs() {
  const [data, setData] = useState([]);
  const { isLoading, error, getBlogs } = useGetBlogData();

  useEffect(() => {
    (async () => {
      const blogs = await getBlogs();
      setData(blogs);
    })();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isEmptyObject(error)) {
    return (
      <div className="flex-grow flex justify-center items-center text-destructive">
        {error.msg || "Sorry we are facing an issue to get data"}
      </div>
    );
  }

  return (
    <section className="flex-grow p-4">
      <div className="bg-accent text-accent-foreground rounded p-2 flex items-center justify-between">
        <h3 className="h5">{data.length || 0}</h3>
        <Link to="/businesses/add-business">
          <Button size="icon" variant="ghost" target="blank">
            <SquarePlus strokeWidth={2} size={32} />
          </Button>
        </Link>
      </div>
      <BlogTable data={data} />
    </section>
  );
}
