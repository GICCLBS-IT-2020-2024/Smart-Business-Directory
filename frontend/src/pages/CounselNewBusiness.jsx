import { BusinessCounseling } from "@/components/forms/BusinessCounselling";

export default function CounselNewBusiness() {
  return (
    <div className="flex flex-col flex-grow my-section">
      <h3 className="h3">
        Complete this form to receive tailored business recommendations.
      </h3>
      <BusinessCounseling />
    </div>
  );
}
