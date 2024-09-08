import { useSelector, useDispatch } from "react-redux";
import { Mail, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { logOut } from "@/store/states/userData";
import DeleteAccount from "@/components/dialogs/DeleteAccount";
import EditUsername from "@/components/dialogs/EditUsername";
import ChangeAvatar from "@/components/dialogs/ChangeAvatar";

export default function AccountSetting() {
  const dispatch = useDispatch();
  const { userData: user } = useSelector((state) => state.userData.data);

  return (
    <div className="flex flex-grow justify-center items-center ">
      <main className="bg-card flex flex-col md:flex-row items-center p-4 gap-8 rounded shadow-md">
        <div className="relative">
          <span className="absolute bottom-0 right-0 z-10">
            <ChangeAvatar />
          </span>
          <Avatar className="w-24 h-24">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="bg-secondary">
              {user ? user.username.charAt(0) : "B"}
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="space-y-4 min-w-96">
          <div className="w-full bg-primary-foreground py-1 px-4 rounded flex items-start gap-2">
            <Mail />
            {user ? user.email : ""}
          </div>
          <div className="w-full bg-primary-foreground py-1 px-4 rounded flex justify-between items-center">
            <div className="flex items-start gap-2">
              <User />
              {user ? user.username : ""}
            </div>
            <EditUsername />
          </div>
          <div className="flex justify-between">
            <Button
              type="button"
              onClick={() => {
                localStorage.removeItem("token");
                dispatch(logOut());
                console.log("logged out");
              }}
              variant="destructive"
              size={"sm"}
            >
              Log Out
            </Button>
            {user.role !== "admin" && <DeleteAccount />}
          </div>
        </div>
      </main>
    </div>
  );
}
