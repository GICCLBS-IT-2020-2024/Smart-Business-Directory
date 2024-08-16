import Hero from "@/components/sections/Hero";
import LatestBlogs from "@/components/sections/LatestBlogs";
import Categories from "@/components/sections/Categories";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow gap-16">
      <Hero />
      <LatestBlogs />
      <Categories />
    </div>
  );
}
