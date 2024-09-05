import { useState } from "react";
import { BusinessCounseling } from "@/components/forms/BusinessCounselling";
import SuggestedBiz from "@/components/sections/SuggestedBiz";

export default function CounselNewBusiness() {
  const [suggest, setSuggest] = useState([]);
  const [didFind, setDidFind] = useState(false);

  if (typeof suggest !== undefined && didFind) {
    return (
      <SuggestedBiz
        suggest={suggest}
        setSuggest={setSuggest}
        setDidFind={setDidFind}
      />
    );
  }

  return (
    <div className="flex flex-col flex-grow my-section gap-8">
      <h3 className="h3 text-center">
        Complete this form to receive tailored business recommendations.
      </h3>
      <BusinessCounseling setSuggest={setSuggest} setDidFind={setDidFind} />
    </div>
  );
}
