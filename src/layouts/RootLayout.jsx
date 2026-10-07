import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="text-center text-xs text-gray-400 py-6">
        © {new Date().getFullYear()} Lumina. All rights reserved.
      </footer>
    </div>
  );
}
