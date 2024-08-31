import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogCard({ data }) {
  return (
    <Card>
      <CardContent className="mt-4">
        <img
          src={data.imgURL}
          alt="image"
          className="rounded-md object-cover"
        />
      </CardContent>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription className="paragraph_clamp">
          {data.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
