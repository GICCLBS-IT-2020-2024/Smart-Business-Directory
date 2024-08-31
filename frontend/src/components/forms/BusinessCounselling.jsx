import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { businessCounsellingSchema } from "@/lib/zod/businessCounselling";
import isEmptyObject from "@/lib/isEmptyObject";
import useCounselNewBusiness from "@/hooks/useNewBizCounsel";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "../common/ButtonLoading";
import ErrorMessage from "../common/ErrorMessage";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function BusinessCounseling({ setSuggest }) {
  const { isLoading, error, counselNewBiz, resetError } =
    useCounselNewBusiness();
  const form = useForm({
    resolver: zodResolver(businessCounsellingSchema),
  });

  async function onSubmit(values) {
    console.log(values);
    const res = await counselNewBiz(values);
    setSuggest(res);
  }

  function reset() {
    resetError();
    form.reset();
  }

  return (
    <div className="flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 max-w-screen-md"
        >
          {!isEmptyObject(error) && <ErrorMessage msg={error.msg} />}
          {data.map((dat, index) => (
            <FormField
              control={form.control}
              name={dat.name}
              key={index}
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>{index + 1 + ". " + dat.question}</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 gap-4"
                    >
                      {dat.options.map((option, index) => (
                        <FormItem
                          key={index}
                          className="flex items-center space-x-3 space-y-0 flex-grow "
                        >
                          <FormControl>
                            <RadioGroupItem value={option.value} />
                          </FormControl>
                          <FormLabel className="font-normal border p-1 py-2 rounded-sm max-w-72 w-full">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <div className="space-x-4 flex justify-center">
            <ButtonLoading type="submit" isLoading={isLoading}>
              Submit
            </ButtonLoading>
            <Button type="reset" onClick={reset} variant="outline">
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

const data = [
  {
    question: "What type of environment do you prefer working in?",
    name: "environment",
    options: [
      { value: "1", label: "Outdoor/Nature" },
      { value: "2", label: "Kitchen/Home" },
      { value: "3", label: "Online/Remote" },
      { value: "4", label: "Creative/Artistic Studio" },
      { value: "5", label: "Office/Teaching Space" },
      { value: "6", label: "Health/Wellness Facility" },
      { value: "7", label: "Retail/Storefront" },
      { value: "8", label: "Service-Oriented" },
      { value: "9", label: "Real Estate/Property" },
      { value: "10", label: "Event Planning/Venue" },
    ],
  },
  {
    question: "How much initial capital are you willing to invest?",
    name: "investment",
    options: [
      { value: "1", label: "Less than $5,000" },
      { value: "2", label: "$5,000 - $20,000" },
      { value: "3", label: "$20,000 - $50,000" },
      { value: "4", label: "More than $50,000" },
    ],
  },
  {
    question: "How much time can you dedicate to your business weekly?",
    name: "time",
    options: [
      { value: "1", label: "Less than 10 hours" },
      { value: "2", label: "10 - 20 hours" },
      { value: "3", label: "20 - 40 hours" },
      { value: "4", label: "Full-time" },
    ],
  },
  {
    question: "What is your skill level in managing a business?",
    name: "managing_level",
    options: [
      { value: "1", label: "Beginner" },
      { value: "2", label: "Intermediate" },
      { value: "3", label: "Experienced" },
      { value: "4", label: "Expert" },
    ],
  },
  {
    question: "What is your risk tolerance?",
    name: "risk_tolerance",
    options: [
      { value: "1", label: "Very low" },
      { value: "2", label: "Low" },
      { value: "3", label: "Moderate" },
      { value: "4", label: "High" },
    ],
  },
  {
    question: "Which of the following best describes your interests?",
    name: "interest",
    options: [
      { value: "1", label: "Agriculture and Nature" },
      { value: "2", label: "Culinary and Food" },
      {
        value: "3",
        label: "Technology and Online Business",
      },
      { value: "4", label: "Creative Arts and Design" },
      { value: "5", label: "Education and Training" },
      { value: "6", label: "Health and Wellness" },
      { value: "7", label: "Retail and Commerce" },
      { value: "8", label: "Services and Customer Interaction" },
      {
        value: "9",
        label: "Property and Investment",
      },
      {
        value: "10",
        label: "Event Planning and Hospitality",
      },
    ],
  },
  {
    question: "Do you prefer working alone or with a team?",
    name: "prefer_working",
    options: [
      { value: "1", label: "Alone" },
      { value: "2", label: "With a small team" },
      { value: "3", label: "With a large team" },
    ],
  },
  {
    question: "What kind of work-life balance are you looking for?",
    name: "work_life_balance",
    options: [
      { value: "1", label: "Flexible" },
      { value: "2", label: "Steady and consistent" },
      { value: "3", label: "Demanding but rewarding" },
    ],
  },
  {
    question: "Which market are you targeting?",
    name: "market",
    options: [
      { value: "1", label: "Local Community" },
      { value: "2", label: "National Market" },
      { value: "3", label: "International Market" },
      { value: "4", label: "Niche Audience" },
    ],
  },
  {
    question: "How soon do you want to start your business?",
    name: "business_start",
    options: [
      { value: "1", label: "Immediately" },
      { value: "2", label: "Within 3 months" },
      { value: "3", label: "Within 6 months" },
      { value: "4", label: "Within a year" },
    ],
  },
  {
    question: "What is your highest level of education?",
    name: "education",
    options: [
      { value: "1", label: "Matric/O-Level" },
      { value: "2", label: "Intermediate/A-Level" },
      { value: "3", label: "Bachelor's Degree" },
      { value: "4", label: "Master's Degree" },
      { value: "5", label: "Diploma/Certification" },
      { value: "6", label: "No Formal Education" },
    ],
  },
  {
    question: "What type of location are you based in?",
    name: "location",
    options: [
      { value: "1", label: "Urban area" },
      { value: "2", label: "Suburban area" },
      { value: "3", label: "Rural area" },
      { value: "4", label: "Flexible/Online" },
    ],
  },
];
