import { Link } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";

export default function Categories() {
  const [categoryOptions] = useSelector((state) => [state.categories]);
  return (
    <section className="my-section m-2 space-y-8">
      <h3 className="h3 text-center">Categories</h3>
      <div className="flex gap-4 flex-wrap">
        {categoryOptions.map((category, index) => (
          <Link
            key={category.value}
            to={`/${category.value}`}
            className="flex-grow"
          >
            <Button
              variant="secondary"
              className="shadow active:scale-90 w-full"
            >
              <BriefcaseBusiness className="mr-2 h-4 w-4" />
              {category.label}
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}
