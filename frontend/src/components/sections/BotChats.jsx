import { BotMessageSquare } from "lucide-react";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BotFAQ from "./BotFAQ";

export default function BotChats() {
  return (
    <div className="flex justify-center items-center px-2 sm:px-4 md:px-8 lg:px-16 flex-grow mb-32">
      <BotFAQ />
    </div>
    // <div className="px-2 sm:px-4 md:px-8 lg:px-16 mt-4 space-y-4 mb-32">
    //   {/* <ClientMessage />
    //   <BotMessage /> */}
    // </div>
  );
}

function BotMessage() {
  return (
    <div className="flex gap-4 mr-24">
      <div className="bg-muted self-start p-2 rounded-full">
        <BotMessageSquare className="size-6" />
      </div>
      <p className="bg-muted py-4 px-4 rounded-md shadow">My Answer</p>
    </div>
  );
}

function ClientMessage() {
  const { userData: user } = useSelector((state) => state.userData.data);
  return (
    <div className="flex gap-4 flex-row-reverse ml-24">
      <Avatar className="">
        <AvatarImage src={user?.avatar} />
        <AvatarFallback className="bg-secondary text-h5FontSize">
          {user ? user.username.charAt(0) : "U"}
        </AvatarFallback>
      </Avatar>
      <p className="bg-accent py-4 px-4 rounded-md shadow">My Question</p>
    </div>
  );
}
