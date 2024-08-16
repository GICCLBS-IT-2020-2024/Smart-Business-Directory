import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeIcon, BotMessageSquare } from "lucide-react";
import AuthButton from "../dialogs/AuthButton";
import Otp from "../dialogs/Otp";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavLinks() {
  const user = useSelector((state) => state.userData);

  return (
    <ul className="flex flex-col md:flex-row items-center gap-8">
      <li className={user.isLoggedIn ? "md:order-3" : "order-3"}>
        {user.isLoggedIn ? (
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              `flex items-center gap-2 bg-transparent transition-shadow duration-500 rounded-full + ${
                isPending
                  ? "text-muted"
                  : isActive
                  ? "text-primary underline underline-offset-4 md:no-underline md:rounded-full shadow-md shadow-primary"
                  : "shadow-none"
              }`
            }
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src={user.data.userData.avatar} />
              <AvatarFallback>
                {user ? user.data.userData.username.charAt(0) : "B"}
              </AvatarFallback>
            </Avatar>
            <span className="md:hidden">Profile</span>
          </NavLink>
        ) : (
          <>
            <AuthButton />
            <Otp />
          </>
        )}
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `flex items-center gap-2  + ${
              isPending
                ? "text-muted"
                : isActive
                ? "text-primary underline underline-offset-4"
                : ""
            }`
          }
        >
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            `flex items-center gap-2  + ${
              isPending
                ? "text-muted"
                : isActive
                ? "text-primary underline underline-offset-4"
                : ""
            }`
          }
        >
          <span>About</span>
        </NavLink>
      </li>
      <li className="order-1">
        <NavLink
          to="/ai-bot"
          className={({ isActive, isPending }) =>
            `flex items-center gap-2  + ${
              isPending
                ? "text-muted"
                : isActive
                ? "text-primary underline underline-offset-4"
                : ""
            }`
          }
        >
          <span>Biz GPT</span>
        </NavLink>
      </li>
    </ul>
  );
}
