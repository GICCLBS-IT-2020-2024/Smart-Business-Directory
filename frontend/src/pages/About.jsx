import OurMission from "@/components/sections/OurMission";
import BackgroundStory from "@/components/sections/BackgroundStory";

export default function About() {
  return (
    <section className="flex flex-col flex-grow gap-16">
      <OurMission />
      <BackgroundStory />
    </section>
  );
}
