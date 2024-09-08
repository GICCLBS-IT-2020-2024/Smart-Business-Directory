import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogInfo({ data }) {
  return (
    <section>
      <Card className="flex flex-col md:flex-row">
        <CardContent className="mt-4 space-y-2">
          <img
            src={data.imageUrl || "/Buildings.jpg"}
            alt="image"
            className="rounded-md object-cover w-full md:max-w-[500px]"
          />
        </CardContent>
        <CardHeader>
          <CardTitle className="h1">{data.title}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
}
