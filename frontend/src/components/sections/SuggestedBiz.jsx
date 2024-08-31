import { Button } from "../ui/button";
import BlogCard from "../common/BlogCard";

const biz = [
  {
    imgURL: "/Buildings.jpg",
    title: "My Business",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio saepe libero porro rem dignissimos fugit voluptas ad, nihil omnis odio sequi quas tenetur dolores commodi perspiciatis explicabo cum quos doloremque minima tempora deleniti ex modi. Perferendis in praesentium veniam! Laboriosam iusto dignissimos quasi nisi quibusdam quis ipsam consequuntur incidunt temporibus!",
  },
  {
    imgURL: "/Buildings.jpg",
    title: "My Business",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio saepe libero porro rem dignissimos fugit voluptas ad, nihil omnis odio sequi quas tenetur dolores commodi perspiciatis explicabo cum quos doloremque minima tempora deleniti ex modi. Perferendis in praesentium veniam! Laboriosam iusto dignissimos quasi nisi quibusdam quis ipsam consequuntur incidunt temporibus!",
  },
  {
    imgURL: "/Buildings.jpg",
    title: "My Business",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio saepe libero porro rem dignissimos fugit voluptas ad, nihil omnis odio sequi quas tenetur dolores commodi perspiciatis explicabo cum quos doloremque minima tempora deleniti ex modi. Perferendis in praesentium veniam! Laboriosam iusto dignissimos quasi nisi quibusdam quis ipsam consequuntur incidunt temporibus!",
  },
];

export default function SuggestedBiz({ suggest, setSuggest }) {
  return (
    <section className="flex flex-col flex-grow my-section gap-8">
      <Button
        className="w-fit"
        onClick={() => {
          setSuggest([]);
        }}
      >
        Go Back
      </Button>
      <div className="md:flex gap-4 space-y-4 md:space-y-0">
        {biz.map((s, index) => (
          <BlogCard key={index} data={s} />
        ))}
      </div>
    </section>
  );
}
