import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Select, { components } from "react-select";
import { BriefcaseBusiness } from "lucide-react";
import { useSelector } from "react-redux";
import { addBusinessFormSchema } from "@/lib/zod/businessSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ButtonLoading } from "../common/ButtonLoading";
import isEmptyObject from "@/lib/isEmptyObject";
import ErrorMessage from "../common/ErrorMessage";
import useAddBusiness from "@/hooks/useAddBusiness";
import { Button } from "../ui/button";
import { removeCachedData } from "../../lib/cachedData";
import { keyGenerateForBlogToEdit } from "../../lib/loaders/blogsDataToEditLoader";

const { Control } = components;

export default function AddBizBasicInfo({ blogData, setBlogData }) {
  const [categoryOptions] = useSelector((state) => [state.categories]);
  const { isLoading, error, addBusiness, resetError } = useAddBusiness();
  const form = useForm({
    resolver: zodResolver(addBusinessFormSchema),
    defaultValues: {
      id: "",
      title: "",
      category: "",
      description: "",
    },
  });

  useEffect(() => {
    if (blogData) {
      form.reset({
        id: blogData.id || "",
        title: blogData.title || "",
        category:
          categoryOptions && blogData.category
            ? categoryOptions.find(
                (category) => category.value === blogData.category
              )
            : "",
        description: blogData.description || "",
      });
    }
  }, [blogData, form]);

  useEffect(() => {
    if (!isEmptyObject(error) && error.description) {
      form.setError("description", { message: error.description });
    }
    if (!isEmptyObject(error) && error.category) {
      form.setError("category", { message: error.category });
    }
    if (!isEmptyObject(error) && error.title) {
      form.setError("title", { message: error.title }, { shouldFocus: true });
    }
  }, [error]);

  async function onSubmit(values) {
    values = {
      ...values,
      id: blogData.id || "",
      category: values.category.value,
    };
    removeCachedData(keyGenerateForBlogToEdit(values.id));

    const res = await addBusiness(values);
    if (!isEmptyObject(res)) {
      setBlogData({
        ...blogData,
        id: res.id,
        category: res.category,
        title: res.title,
        description: res.description,
      });
    }
    if (res) {
      const toastId = toast("Blog data has been saved.", {
        duration: 2000,
      });
      window.addEventListener("scroll", () => toast.dismiss(toastId));
    }
  }

  function reset() {
    form.reset();
    resetError();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {!isEmptyObject(error) && <ErrorMessage msg={error.msg} />}
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="My Business" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Select Category</FormLabel>
                <FormControl>
                  <Select
                    options={categoryOptions}
                    components={{ Control: CustomControlCategory }}
                    placeholder="Category..."
                    unstyled
                    isClearable
                    onChange={field.onChange}
                    value={field.value}
                    classNames={{
                      control: () => "py-1.5",
                      placeholder: () => "text-muted-foreground",
                      menu: () => "bg-popover shadow mt-2 border rounded p-2",
                      menuList: () => "space-y-1",
                      option: (state) =>
                        `rounded py-1 px-2 ${
                          state.isSelected
                            ? "bg-primary text-primary-foreground"
                            : state.isFocused
                            ? "bg-accent text-accent-foreground"
                            : ""
                        }`,
                      clearIndicator: () => "hover:text-destructive",
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  rows="8"
                  onPaste={(e) => {
                    field.value += e.target.value;
                  }}
                  placeholder="Tell us a little bit about this blog"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row-reverse gap-2">
          <Button type="button" onClick={reset} variant="outline">
            Reset
          </Button>
          <ButtonLoading isLoading={isLoading}>Submit</ButtonLoading>
        </div>
      </form>
    </Form>
  );
}

const CustomControlCategory = ({ children, ...props }) => (
  <Control
    {...props}
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background items-center gap-2 focus-within:ring-2 ring-ring ring-offset-1"
  >
    <BriefcaseBusiness size={"24"} />
    {children}
  </Control>
);
