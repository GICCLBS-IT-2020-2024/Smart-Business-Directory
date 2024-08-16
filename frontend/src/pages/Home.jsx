import Hero from "@/components/sections/Hero";
import LatestBlogs from "@/components/sections/LatestBlogs";
import Categories from "@/components/sections/Categories";
import Features from "@/components/sections/Features";
import AboutAI from "@/components/sections/AboutAI";
import AboutBizGuide360 from "@/components/sections/AboutBizGuide360";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow gap-16">
      <Hero />
      <LatestBlogs />
      <Categories />
    </div>
  );
}
