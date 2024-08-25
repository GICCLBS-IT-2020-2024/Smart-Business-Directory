import { useParams } from "react-router-dom";

export default function BlogByCategory() {
  const { category } = useParams();
  return <div className="flex flex-col flex-grow">BlogByCategory </div>;
}
