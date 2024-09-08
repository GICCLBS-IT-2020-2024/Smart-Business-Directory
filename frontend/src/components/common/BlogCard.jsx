import { Link } from "react-router-dom";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogCard({ data }) {
  return (
    <Link to={`/businesses/${data._id}`}>
      <Card>
        <CardContent className="mt-4">
          <img
            src={data.imageUrl || "/Buildings.jpg"}
            alt="image"
            className="rounded-md object-cover h-[200px] w-full"
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription className="paragraph_clamp">
            {data.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
