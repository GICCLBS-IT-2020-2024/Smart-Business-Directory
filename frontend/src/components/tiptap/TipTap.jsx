import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import Paragraph from "@tiptap/extension-paragraph";
import Toolbar from "./Toolbar";

const CustomHeading = Heading.extend({
  renderHTML({ node, HTMLAttributes }) {
    const level = node.attrs.level;

    // Add specific classes based on the heading level
    const levelClasses = {
      // Tailwind classes for h1
      2: "h2", // Tailwind classes for h2 // Tailwind classes for h3
      4: "h4", // Tailwind classes for h4// Tailwind classes for h5
      6: "h6", // Tailwind classes for h6
    };

    return [
      `h${level}`, // Tag name (h1, h2, etc.)
      {
        ...HTMLAttributes,
        class: levelClasses[level] || "text-base font-medium",
      }, // Apply the class
      0,
    ];
  },
});

export default function TipTap({ blog, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Paragraph.configure({
        HTMLAttributes: {
          class: "paragraph",
        },
      }),
      CustomHeading.configure({}),
      OrderedList.configure({
        HTMLAttributes: {
          class: "list-decimal ml-6",
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc ml-6",
        },
      }),
    ],
    content: blog,
    editorProps: {
      attributes: {
        class: "border rounded-md border-input bg-background min-h-[150px] p-2",
      },
    },
    onUpdate({}) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });
  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
