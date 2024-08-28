import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="my-section flex flex-col-reverse md:flex-row">
      <div className="space-y-4">
        <h1 className="h1 text-primary">
          Elevate Your Business, Elevate Your Life
        </h1>
        <ul className="text-accent-foreground">
          <li className="h4">Information simplified for you.</li>
          <li className="h4">Unlock a wealth of business insights.</li>
        </ul>
        <Link to={"/counselling/new-business"} className="block">
          <Button className="active:scale-95">Start Counselling</Button>
        </Link>
      </div>
      <div className="hidden md:flex">
        <img src="/hero_section.svg" alt="" />
      </div>
    </header>
  );
}
