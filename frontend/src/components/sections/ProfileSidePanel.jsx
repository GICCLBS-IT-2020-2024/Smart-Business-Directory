import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserCog, Bookmark, ListTree, Book, Handshake } from "lucide-react";
import { useSelector } from "react-redux";

const userLinks = [
  { name: "Account Setting", path: "/profile", icon: UserCog },
];

const adminLinks = [
  {
    name: "Manage Blogs",
    path: "/profile/manage-blogs",
    icon: Book,
  },
  {
    name: "Manage Categories",
    path: "/profile/manage-categories",
    icon: ListTree,
  },
];

export default function ProfileSidePanel() {
  const { userData: user } = useSelector((state) => state.userData.data);
  const location = useLocation();

  let links = userLinks;

  if (user && user.role === "admin") {
    links = userLinks.concat(adminLinks);
  }

  return (
    <section
      className="md:flex items-center px-8 sticky top-16 z-40 mt-4 md:mt-0"
      style={{ maxHeight: "calc(100svh - 8rem)" }}
    >
      <ul className="flex md:flex-col flex-row gap-4 p-4 bg-secondary rounded-lg">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`px-2 py-1 rounded flex-grow  transition-colors duration-200 ${
              location.pathname === link.path
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary-foreground"
            }`}
          >
            <li className="flex justify-center md:justify-normal gap-2 items-center">
              <link.icon />
              <span className="hidden md:block whitespace-nowrap">
                {link.name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
