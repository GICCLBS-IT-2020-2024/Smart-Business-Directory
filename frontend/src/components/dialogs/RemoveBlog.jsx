import { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import useRemoveBlog from "@/hooks/useRemoveBlog";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import ErrorMessage from "../common/ErrorMessage";
import isEmptyObject from "@/lib/isEmptyObject";
import { ButtonLoading } from "../common/ButtonLoading";

export default function RemoveBlog({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, error, removeBlog } = useRemoveBlog();

  async function handleRemoveBlog() {
    const ok = await removeBlog(id);
    if (ok) {
      setIsOpen(false);
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-destructive focus:text-destructive-foreground text-destructive"
        >
          Remove
        </DropdownMenuItem>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure you want to delete this blog?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently this blog and
            remove all data from our servers.
          </AlertDialogDescription>
          {!isEmptyObject(error) && <ErrorMessage msg={error.msg} />}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <ButtonLoading
            isLoading={isLoading}
            onClick={handleRemoveBlog}
            className="bg-destructive text-destructive-foreground"
          >
            Yes
          </ButtonLoading>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
