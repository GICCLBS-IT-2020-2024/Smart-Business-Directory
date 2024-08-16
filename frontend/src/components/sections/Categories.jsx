import { Link } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { Button } from "../ui/button";

const data = [
  { label: "Business1", value: "business2" },
  { label: "Business12", value: "business2" },
  { label: "Business1312", value: "business2" },
  { label: "Business", value: "business2" },
  { label: "Business112qqq", value: "business2" },
  { label: "Business133asd", value: "business2" },
];

export default function Categories() {
  return (
    <section className="my-section m-2 space-y-8">
      <h3 className="h3 text-center">Categories</h3>
      <div className="flex gap-4 flex-wrap">
        {data.map((dat, index) => (
          <Link key={index} to={"/"} className="flex-grow">
            <Button
              variant="secondary"
              className="shadow active:scale-90 w-full"
            >
              <BriefcaseBusiness className="mr-2 h-4 w-4" />
              {dat.label}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}
