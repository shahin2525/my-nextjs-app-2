"use client";

import Link from "next/link";
import { useState } from "react";
// import { Menu, X } from "lucide-react";

const Sider = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`bg-gray-900 text-white h-screen p-5 w-64 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 fixed md:static`}
      >
        <nav className="space-y-4">
          <Link href="/" className="block hover:text-gray-400">
            Home
          </Link>
          <Link href="/profile" className="block hover:text-gray-400">
            Profile
          </Link>
          <Link href="/setting" className="block hover:text-gray-400">
            Settings
          </Link>
        </nav>
      </div>
      <div className="flex-1 p-4">
        <button className="md:hidden mb-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <>X</> : <>Menu</>}
        </button>
      </div>
    </div>
  );
};

export default Sider;
