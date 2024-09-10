import { useState, useCallback, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils"; // Adjust this import path according to your project
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const headings = [
  { value: "2", label: "Heading 2", level: 2 },
  { value: "4", label: "Heading 4", level: 4 },
  { value: "6", label: "Heading 6", level: 6 },
];

export default function ComboBoxForHeading({ editor }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!editor) return;

    const updateComboboxValue = () => {
      const currentHeadingLevel =
        headings.find((heading) =>
          editor.isActive("heading", { level: heading.level })
        )?.value || "";

      setValue(currentHeadingLevel);
    };

    editor.on("selectionUpdate", updateComboboxValue);

    return () => {
      editor.off("selectionUpdate", updateComboboxValue);
    };
  }, [editor]);

  const applyHeading = (level) => {
    if (editor) {
      editor.chain().focus().toggleHeading({ level }).run();
      updateComboboxValue();
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? headings.find((heading) => heading.value === value)?.label
            : "Select heading..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search heading..."
            className="focus:border-none"
          />
          <CommandList>
            <CommandEmpty>No heading found.</CommandEmpty>
            <CommandGroup>
              {headings.map((heading) => (
                <CommandItem
                  key={heading.value}
                  value={heading.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    applyHeading(heading.level); // Apply heading level to editor
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === heading.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {heading.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
