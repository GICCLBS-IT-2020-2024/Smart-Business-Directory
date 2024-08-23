import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { DialogFooter } from "../ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonLoading } from "../common/ButtonLoading";
import ErrorMessage from "../common/ErrorMessage";
import useEditCategory from "@/hooks/useEditCategory";
import { editCategoryFormSchema } from "@/lib/zod/categorySchema";
import isEmptyObject from "@/lib/isEmptyObject";

export default function EditCategoryForm({ id, setIsOpen }) {
  const { isLoading, error, editCategory, resetError } = useEditCategory();
  const [categoryOptions] = useSelector((state) => [state.categories]);
  const form = useForm({
    resolver: zodResolver(editCategoryFormSchema),
    defaultValues: {
      id: id,
      category: categoryOptions
        ? categoryOptions.find((category) => category.value === id).label
        : "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
    const ok = await editCategory(values);
    if (ok) {
      setIsOpen(false);
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
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="button" onClick={reset} variant="outline">
            Reset
          </Button>
          <ButtonLoading type="submit" isLoading={isLoading}>
            Ok
          </ButtonLoading>
        </DialogFooter>
      </form>
    </Form>
  );
}
