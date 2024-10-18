import { Button } from "../ui/button";
import useChatBiz from "@/hooks/useChatBiz";

const questions = [
  "What are the advantages of having a side business?",
  "How to increase sales revenue in poultry farm business?",
  "Does starting a candles making business a good idea?",
];

export default function BotFAQ() {
  const { chat } = useChatBiz();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 gap-4 place-items-center">
      {questions.map((q, index) => (
        <Button
          key={index}
          variant="outline"
          className="text-wrap text-start active:scale-95 transition-transform w-fit h-fit"
          onClick={() => chat({ message: q })}
        >
          {q}
        </Button>
      ))}
    </div>
  );
}
