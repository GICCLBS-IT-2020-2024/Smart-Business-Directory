import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";

export default function LeaveAssistant() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          type="button"
          className="extraSmall text-muted-foreground hover:text-destructive"
          size="xs"
        >
          Leave Assistant
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Leave Assistant</DialogTitle>
          <DialogDescription>
            Are you sure you want to unsubscribe from the assistant? This action
            cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">No</Button>
          </DialogClose>
          <Button variant="destructive">Yes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
