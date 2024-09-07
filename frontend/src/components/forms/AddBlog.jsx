import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { bizBlogSchema } from "@/lib/zod/businessSchema";
import { ButtonLoading } from "../common/ButtonLoading";
import isEmptyObject from "@/lib/isEmptyObject";
import ErrorMessage from "../common/ErrorMessage";
import useAddBlogArticle from "@/hooks/useAddBlogArticle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import TipTap from "../tiptap/TipTap";
import { removeCachedData } from "../../lib/cachedData";
import { keyGenerateForBlogToEdit } from "../../lib/loaders/blogsDataToEditLoader";

export default function AddBlog({ blogData, setBlogData }) {
  const { isLoading, error, addArticle } = useAddBlogArticle();
  const form = useForm({
    resolver: zodResolver(bizBlogSchema),
    defaultValues: {
      id: "",
      blog: "",
    },
  });

  console.log(blogData);

  useEffect(() => {
    if (blogData) {
      form.reset({
        id: blogData.id,
        blog: blogData.blog || "",
      });
    }
  }, [blogData, form]);

  async function onSubmit(values) {
    removeCachedData(keyGenerateForBlogToEdit(values.id));
    const res = await addArticle(values);
    setBlogData({
      ...blogData,
      blog: res.blog,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {!isEmptyObject(error) && <ErrorMessage msg={error.msg} />}
        <FormField
          control={form.control}
          name="blog"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TipTap blog={blogData.blog} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonLoading type="submit" isLoading={isLoading}>
          Submit
        </ButtonLoading>
      </form>
    </Form>
  );
}
