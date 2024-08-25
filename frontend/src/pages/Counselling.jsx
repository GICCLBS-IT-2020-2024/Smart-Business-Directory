import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Counselling() {
  return (
    <section className="flex flex-col flex-grow items-center justify-center">
      <div className="flex gap-4">
        <Link to="/counselling/new-business" className="active:scale-95">
          <Button>Start a New Business</Button>
        </Link>
        <Link to="/counselling/exist-business" className="active:scale-95">
          <Button>Already Own a Business</Button>
        </Link>
      </div>
    </section>
  );
}
