import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  ListOrdered,
} from "lucide-react";
import ComboBoxForHeading from "./ComboBoxForHeading";
import { Toggle } from "../ui/toggle";

export default function Toolbar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="bg-card flex gap-2 px-2 py-1 rounded-md shadow z-20 sticky top-12">
      <ComboBoxForHeading editor={editor} />
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
