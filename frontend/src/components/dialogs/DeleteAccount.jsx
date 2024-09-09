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
import ErrorMessage from "../common/ErrorMessage";
import isEmptyObject from "@/lib/isEmptyObject";
import { Button } from "../ui/button";
import { ButtonLoading } from "../common/ButtonLoading";
import useDeleteAccount from "@/hooks/useDeleteAccount";

export default function DeleteAccount() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, error, deleteAccount } = useDeleteAccount();

  async function deleteHandler() {
    const ok = await deleteAccount();
    if (ok) {
      localStorage.removeItem("token");
      setIsOpen(false);
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <AlertDialogTrigger asChild>
        <Button
          variant="link"
          type="button"
          className="extraSmall text-muted-foreground hover:text-destructive"
          size="xs"
        >
          Delete Account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
          {!isEmptyObject(error) && <ErrorMessage msg={error.msg} />}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <ButtonLoading isLoading={isLoading} onClick={deleteHandler}>
            Yes
          </ButtonLoading>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
