export default function ErrorBlock({ msg }) {
  return (
    <div className="flex items-center h-full flex-grow justify-center text-destructive">
      {msg}
    </div>
  );
}
