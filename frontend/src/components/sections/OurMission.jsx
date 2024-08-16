const data = {
  heading: "Our Mission",
  paragraph:
    "Our mission is to empower aspiring entrepreneurs to start their businesses and guide them to lasting success.",
};

export default function OurMission() {
  return (
    <section className="my-section grid md:grid-flow-row-reverse grid-row-2 md:grid-rows-1 md:grid-cols-3 gap-4">
      <div className="flex justify-center items-center md:order-3">
        <img src="/our_mission.svg" alt="img" />
      </div>
      <main className="md:col-span-2">
        <h3 className="h3 text-center md:text-start">{data.heading}</h3>
        <p className="h4 ml-8">{data.paragraph}</p>
      </main>
    </section>
  );
}
