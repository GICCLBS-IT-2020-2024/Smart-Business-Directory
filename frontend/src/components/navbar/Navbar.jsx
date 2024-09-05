import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import LinkPopover from "./LinkPopover";

export default function Navbar() {
  return (
    <nav className="bg-background shadow my-container sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-end gap-2">
          <div>
            <img src="/logo.svg" alt="logo" className="size-8" />
          </div>
          <div className="h6 text-primary">Smart Business Directory</div>
        </Link>
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <LinkPopover />
        </div>
      </div>
    </nav>
  );
}
