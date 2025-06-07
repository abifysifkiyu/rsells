
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-purple-800 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-white">TopResells</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
      </div>
    </nav>
  );
}
