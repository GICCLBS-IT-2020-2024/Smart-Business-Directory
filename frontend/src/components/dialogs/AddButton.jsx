import { SquarePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";

export default function AddButton({ heading, children }) {
  return (
    <Dialog>
      <DialogTrigger>
        <SquarePlus strokeWidth={2} size={32} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
