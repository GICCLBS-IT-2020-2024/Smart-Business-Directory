import { Button } from "../ui/button";
import BlogCard from "../common/BlogCard";

export default function SuggestedBiz({ suggest, setSuggest, setDidFind }) {
  if (suggest.length === 0) {
    return (
      <section className="flex flex-col flex-grow my-section gap-8">
        <GoBackButton setSuggest={setSuggest} setDidFind={setDidFind} />
        <div className="flex items-center h-full flex-grow justify-center text-destructive ">
          Sorry we don`t have the suggestion for this
        </div>
      </section>
    );
  }
  return (
    <section className="flex flex-col flex-grow my-section gap-8">
      <GoBackButton setSuggest={setSuggest} setDidFind={setDidFind} />
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 gap-4">
        {suggest.map((s, index) => (
          <BlogCard key={index} data={s} />
        ))}
      </div>
    </section>
  );
}

function GoBackButton({ setSuggest, setDidFind }) {
  return (
    <Button
      className="w-fit"
      onClick={() => {
        setSuggest([]);
        setDidFind(false);
      }}
    >
      Go Back
    </Button>
  );
}
