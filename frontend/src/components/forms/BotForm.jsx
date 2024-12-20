import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send, Loader2, Eraser } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { botMessageSchema } from "@/lib/zod/botMessageSchema";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import useChatBiz from "@/hooks/useChatBiz";
import { reset } from "@/store/states/chatsStatus";

export default function BotForm() {
  const chats = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const { isLoading, error, chat } = useChatBiz();
  const textareaRef = useRef(null);
  const form = useForm({
    resolver: zodResolver(botMessageSchema),
    defaultValues: {
      message: "",
    },
  });

  const maxHeight = "240rem";
  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const singleLineHeight = parseInt(getComputedStyle(textarea).lineHeight);
      if (textarea.scrollHeight <= singleLineHeight) {
        textarea.style.height = "auto";
      } else {
        textarea.style.height = `${Math.min(
          textarea.scrollHeight,
          parseFloat(maxHeight)
        )}px`;
      }
    }
  };

  // function to submit form if press enter in a textarea
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      form.handleSubmit(onSubmit)();
    }
  };

  async function onSubmit(values) {
    try {
      await chat(values);
      form.reset();
      textareaRef.current.style.height = "auto";
    } finally {
      form.reset();
      textareaRef.current.style.height = "auto";
    }
  }

  return (
    <div className="fixed bottom-0 z-10 flex items-center justify-center w-full pb-4 px-2 sm:px-4 md:px-8 lg:px-16 bg-background ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full items-center space-x-4 shadow-top bg-input py-2 px-4 rounded-md"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Textarea
                    ref={textareaRef}
                    placeholder="Ask any question related to business"
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent min-h-0 px-0 py-0 resize-none scrollbar-thin"
                    rows="1"
                    onKeyDown={handleKeyDown}
                    onChange={(e) => {
                      field.onChange(e); // React Hook Form's handler for onChange
                      handleInput(); // Your custom resize handler
                    }}
                    onBlur={field.onBlur} // React Hook Form's handler for onBlur
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="self-end flex items-center gap-2">
            <Button type="submit" size="icon" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <Send className="mt-[4px] mr-[4px]" />
              )}
            </Button>
            <Button
              type="button"
              size="icon"
              className={chats.length === 0 ? "hidden" : "flex"}
              onClick={() => {
                dispatch(reset());
              }}
            >
              <Eraser />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
