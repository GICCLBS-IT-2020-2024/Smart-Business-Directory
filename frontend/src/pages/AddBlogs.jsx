import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import isEmptyObject from "@/lib/isEmptyObject";
import ErrorBlock from "@/components/common/ErrorBlock";
import AddBizBasicInfo from "@/components/forms/AddBizBasicInfo";
import AddBlogMainImg from "@/components/forms/AddBlogMainImg";
import AddBlog from "@/components/forms/AddBlog";

export default function AddBlogs() {
  const [blogData, setBlogData] = useState({});
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      setBlogData(data.blog);
    }
  }, [data]);

  if (data && data.error && !isEmptyObject(data.error)) {
    return <ErrorBlock msg={error.msg || "Sorry something went wrong."} />;
  }

  return (
    <div className="flex-grow form-section flex justify-center">
      <Tabs defaultValue="basin-info" className="w-full">
        <center>
          <TabsList className="flex w-[450px]">
            <TabsTrigger value="basin-info" className="flex-grow">
              Basic Info
            </TabsTrigger>
            <TabsTrigger
              value="images"
              disabled={!blogData.id}
              className="flex-grow"
            >
              Images
            </TabsTrigger>
            <TabsTrigger
              disabled={!blogData.id}
              value="blog"
              className="flex-grow"
            >
              Blog
            </TabsTrigger>
          </TabsList>
        </center>
        <TabsContent value="basin-info" className="">
          <AddBizBasicInfo blogData={blogData} setBlogData={setBlogData} />
        </TabsContent>
        <TabsContent value="images">
          <AddBlogMainImg blogData={blogData} setBlogData={setBlogData} />
        </TabsContent>
        <TabsContent value="blog">
          <AddBlog blogData={blogData} setBlogData={setBlogData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
