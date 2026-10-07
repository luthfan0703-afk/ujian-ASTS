import { NavLink, Link } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Testimony", path: "/testimony" },
  { name: "FAQ", path: "/faq" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center font-bold uppercase">
            s
          </div>
          <span className="font-semibold text-lg hidden sm:block">
            tugas ASTS
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-black" : "text-gray-500 hover:text-black"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <Button>
          <Link to="/signin">Sign In</Link>
        </Button>
      </div>
    </header>
  );
}
