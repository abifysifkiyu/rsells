
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h2 className="text-5xl font-bold mb-4">Top Resells</h2>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Your trusted source for premium digital products. We offer fast delivery, secure checkout, and the best prices online.
      </p>
      <Link
        to="https://discord.gg/slang"
        className="bg-purple-700 px-6 py-3 rounded text-white font-semibold hover:bg-purple-900 transition"
      >
        Browse Products
      </Link>
    </div>
  );
}
