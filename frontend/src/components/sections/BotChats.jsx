import React, { useRef, useEffect } from "react";
import { BotMessageSquare } from "lucide-react";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import BotFAQ from "./BotFAQ";

export default function BotChats() {
  const chats = useSelector((state) => state.chats);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current?.lastElementChild?.scrollIntoView();
    }
  }, [chats]);

  if (chats.length === 0) {
    return (
      <div className="flex justify-center items-center px-2 sm:px-4 md:px-8 lg:px-16 flex-grow mb-32">
        <BotFAQ />
      </div>
    );
  }
  return (
    <div
      ref={scrollRef}
      className="px-2 sm:px-4 md:px-8 lg:px-16 mt-4 space-y-4 mb-32"
    >
      {chats.map((chat, index) => (
        <React.Fragment key={index}>
          <ClientMessage message={chat.client} />
          <BotMessage message={chat.bot} />
        </React.Fragment>
      ))}
    </div>
  );
}

function BotMessage({ message }) {
  return (
    <div className="flex gap-4 mr-24">
      <div className="bg-muted self-start p-2 rounded-full">
        <BotMessageSquare className="size-6" />
      </div>
      {message.loading ? (
        <Skeleton className="w-[200px] h-12" />
      ) : (
        <p
          className={`${
            message.error
              ? "bg-destructive text-destructive-foreground"
              : "bg-muted text-foreground"
          } py-4 px-4 rounded-md shadow`}
          dangerouslySetInnerHTML={{ __html: message.message || message.error }}
        ></p>
      )}
    </div>
  );
}

function ClientMessage({ message }) {
  const { userData: user } = useSelector((state) => state.userData.data);
  return (
    <div className="flex gap-4 flex-row-reverse ml-24">
      <Avatar className="">
        <AvatarImage src={user?.avatar} />
        <AvatarFallback className="bg-secondary text-h5FontSize">
          {user ? user.username.charAt(0) : "U"}
        </AvatarFallback>
      </Avatar>
      <p className="bg-accent py-4 px-4 rounded-md shadow">{message.message}</p>
    </div>
  );
}
