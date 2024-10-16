import { BotMessageSquare } from "lucide-react";
import BizzGPT from "@/components/chatbot/Bizzgpt";
import BotFAQ from "@/components/sections/BotFAQ";
import BotForm from "@/components/forms/BotForm";
import BotChats from "@/components/sections/BotChats";

export default function BizGPT() {
  return (
    <div className="flex-grow">
      {true ? <BotChats /> : <BotFAQ />}

      <BotForm />
    </div>
  );
}
