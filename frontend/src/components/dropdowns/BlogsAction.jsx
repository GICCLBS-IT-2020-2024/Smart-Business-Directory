import { useState, useEffect } from "react";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RemoveBlog from "../dialogs/RemoveBlog";

export default function BlogsActions({ id }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setIsOpen(false));
    return () => {
      window.removeEventListener("scroll", () => setIsOpen(false));
    };
  }, [isOpen]);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link to={`/businesses/${id}`} className="w-full h-full">
            View Blog
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to={`/businesses/add-business/${id}`} className="w-full h-full">
            Edit
          </Link>
        </DropdownMenuItem>
        <RemoveBlog id={id} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
