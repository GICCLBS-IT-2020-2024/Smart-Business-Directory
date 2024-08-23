import { useState } from "react";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "../ui/dialog";
import { Button } from "../ui/button";
import ChangeAvatarForm from "../forms/ChangeAvatarForm";

export default function ChangeAvatar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="small" variant="outline" className="rounded-full p-1">
          <Pencil size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Avatar</DialogTitle>
        </DialogHeader>
        <ChangeAvatarForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}
