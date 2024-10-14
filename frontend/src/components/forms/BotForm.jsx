import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { botMessageSchema } from "@/lib/zod/botMessageSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { ButtonLoading } from "../common/ButtonLoading";

export default function BotForm() {
  const textareaRef = useRef(null);
  const form = useForm({
    resolver: zodResolver(botMessageSchema),
    defaultValues: {
      message: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="fixed bottom-0 z-10 flex items-center justify-center w-full py-4 bg-accent shadow-top">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-lg items-center space-x-2"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Textarea
                    ref={textareaRef}
                    placeholder="Tell us a little bit about yourself"
                    className="min-h-0"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <ButtonLoading type="submit">Ask</ButtonLoading>
        </form>
      </Form>
    </div>
  );
}
