import { useParams } from "react-router-dom";

export default function Business() {
  const { businessId } = useParams();
  return <div className="flex-grow">Business {businessId}</div>;
}
