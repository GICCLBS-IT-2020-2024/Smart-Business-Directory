import { AspectRatio } from "../ui/aspect-ratio";

const data = {
  heading: "Background Story",
  paragraphs: [
    "This project was conceived and developed as a Final Year Project (FYP) at Government Islamia Graduate College, Civil Lines, Lahore, under the esteemed supervision of Dr. Mian Muhammad Muni-ud-din, Head of Department. Our dedicated team members—Huzaifa, Hammad, and Moazzam—led by Huzaifa, have poured their collective effort and passion into bringing this vision to life.",
    "Driven by a shared goal, we embarked on this project to address a significant challenge: enabling aspiring entrepreneurs to start their businesses with ease and providing them with expert consultation. Through our platform, we strive to simplify the process of starting a business, offering guidance and resources to ensure their success.",
    "This project is a testament to the hard work and collaboration of our entire group, guided by the invaluable mentorship of our supervisor. Together, we are committed to fostering a supportive environment where new businesses can thrive and succeed.",
  ],
};

export default function BackgroundStory() {
  return (
    <section className="my-container grid grid-row-2 md:grid-rows-1 md:grid-cols-3 gap-4">
      <div className="flex justify-center items-center">
        <img
          src="/background_story.svg"
          alt="img"
          className="max-w-72 rounded"
        />
      </div>
      <main className="md:col-span-2">
        <h1 className="h2 text-center md:text-start">{data.heading}</h1>
        <article className="ml-8 space-y-4">
          {data.paragraphs.map((paragraph, index) => (
            <p>{paragraph}</p>
          ))}
        </article>
      </main>
    </section>
  );
}
