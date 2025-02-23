"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MyWebsite
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <> X</> : <> Menu</>}
          </button>
        </div>
        <div
          className={`md:flex space-x-6 md:static absolute bg-gray-900 w-full left-0 top-full md:w-auto md:bg-transparent md:space-x-6 flex-col md:flex-row items-center p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="/about"
            className={
              pathName === "/about"
                ? "text-blue-400 underline"
                : "hover:text-gray-400"
            }
          >
            About
          </Link>
          <Link
            href="/contact"
            className={
              pathName === "/contact"
                ? "text-blue-400 underline"
                : "hover:text-gray-400"
            }
          >
            Contact
          </Link>
          <Link href="/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
          <Link
            href="/login"
            className={
              pathName === "/login"
                ? "text-blue-400 underline"
                : "hover:text-gray-400"
            }
          >
            Login
          </Link>
          <Link
            href="/register"
            className={
              pathName === "/register"
                ? "text-blue-400 underline"
                : "hover:text-gray-400"
            }
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
