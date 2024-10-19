import BotForm from "@/components/forms/BotForm";
import BotChats from "@/components/sections/BotChats";

export default function BizGPT() {
  return (
    <div className="flex-grow flex flex-col">
      <BotChats />
      <BotForm />
    </div>
  );
}
