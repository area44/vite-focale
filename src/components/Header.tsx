import { Link, NavLink } from "react-router";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 mb-6">
      <Link to="/" className="font-bold text-xl">
        Focale
      </Link>
      <nav className="flex gap-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "underline" : "opacity-80 hover:opacity-100"
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline" : "opacity-80 hover:opacity-100"
          }
        >
          About
        </NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
}
