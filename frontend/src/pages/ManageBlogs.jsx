import { SquarePlus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function MyBlogs() {
  return (
    <section className="flex-grow p-4">
      <div className="bg-accent text-accent-foreground rounded p-2 flex items-center justify-between">
        <h3 className="h5">123</h3>
        <Link to="/add-business">
          <Button size="icon" variant="ghost" target="blank">
            <SquarePlus strokeWidth={2} size={32} />
          </Button>
        </Link>
      </div>
    </section>
  );
}
