import { Link, useRouteError } from "react-router-dom";
import { Button } from "../ui/button";

export default function ErrorElement() {
  let error = useRouteError();

  error = error instanceof Error ? JSON.parse(error.message) : error;

  return (
    <div className="flex flex-col min-h-svh justify-center items-center">
      <h1 className="h1 text-destructive text-center">
        {error.statusText} {error.status}
      </h1>
      <p>
        {error.message || "Sorry we got an error 😞."}
        <Link link="/">
          <Button variant="link">Go to Home</Button>
        </Link>
      </p>
    </div>
  );
}
