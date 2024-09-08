import { Outlet } from "react-router-dom";
import ProfileSidePanel from "@/components/sections/ProfileSidePanel";

export default function ProfileLayout() {
  return (
    <div className="flex flex-col md:flex-row gap-4 flex-grow">
      <ProfileSidePanel />
      {/* must include flex-grow to direct children in Outlet */}
      <Outlet />
    </div>
  );
}
