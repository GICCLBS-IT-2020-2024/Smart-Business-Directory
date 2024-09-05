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

export default function AddBlog({ blogData, setBlogData }) {
  const { isLoading, error, addArticle, resetError } = useAddBlogArticle();
  const form = useForm({
    resolver: zodResolver(bizBlogSchema),
    defaultValues: {
      id: blogData.id,
      blog: blogData.blog || "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
    const res = await addArticle(values);
    setBlogData({
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
