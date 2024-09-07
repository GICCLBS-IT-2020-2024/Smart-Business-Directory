import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { ButtonLoading } from "../common/ButtonLoading";
import ErrorMessage from "../common/ErrorMessage";
import isEmptyObject from "@/lib/isEmptyObject";
import { bizMainImgFormSchema } from "@/lib/zod/businessSchema";
import MyDropZone from "../common/MyDropZone";
import getFormData from "@/lib/getFormData";
import useAddBlogImg from "@/hooks/useAddBlogImg";
import { removeCachedData } from "../../lib/cachedData";
import { keyGenerateForBlogToEdit } from "../../lib/loaders/blogsDataToEditLoader";

export default function AddBlogMainImg({ blogData, setBlogData }) {
  const { isLoading, error, uploadImg } = useAddBlogImg();
  const [fileData, setFileSata] = useState({
    filePreview: blogData.imageUrl || "",
    errorMessage: "",
  });

  const form = useForm({
    resolver: zodResolver(bizMainImgFormSchema),
    defaultValues: {
      id: blogData.id,
      main: "",
    },
  });

  async function onSubmit(values) {
    const res = await uploadImg(getFormData(values));
    removeCachedData(keyGenerateForBlogToEdit(values.id));
    setBlogData({ ...blogData, imageUrl: res.imageUrl });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {!isEmptyObject(error) && <ErrorMessage msg={error.msg} />}
        <FormField
          control={form.control}
          name="main"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <FormControl>
                <MyDropZone
                  field={field}
                  form={form}
                  fileData={fileData}
                  setFileData={setFileSata}
                />
              </FormControl>
              <div className="flex justify-center items-center ">
                <img
                  src={fileData.filePreview}
                  alt="upload image"
                  className="w-56"
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonLoading type="submit" isLoading={isLoading}>
          Ok
        </ButtonLoading>
      </form>
    </Form>
  );
}
