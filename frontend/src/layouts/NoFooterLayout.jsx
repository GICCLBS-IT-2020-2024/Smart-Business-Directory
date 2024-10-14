import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/navbar/Navbar";

export default function NoFooterLayout() {
  return (
    <div className="paragraph flex flex-col min-h-svh">
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Toaster />
    </div>
  );
}
