
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="bg-purple-800 p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Top Resells</h1>
          <nav className="space-x-6">
            <a href="#" className="hover:text-purple-300">Home</a>
            <a href="https://discord.gg/slang" className="hover:text-purple-300">Join Discord</a>
          </nav>
        </div>
      </header>
      <main className="text-center py-24 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-purple-400">Welcome to TopResells</h2>
        <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-300">
          Your #1 source for premium digital reselling tools and resources. Join the community and start your journey today.
        </p>
        <a
          href="https://discord.gg/slang"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
        >
          Purchase Vendors
        </a>
      </main>
      <section className="bg-purple-900 py-20 px-6 text-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Trusted by Resellers</h3>
            <p>Join a growing network of successful digital resellers using our platform.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Exclusive Tools</h3>
            <p>Access private, custom-built software tools to help you grow.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">24/7 Community</h3>
            <p>Get support and advice from our active and helpful community anytime.</p>
          </div>
        </div>
      </section>
      <footer className="bg-black text-center text-sm text-gray-500 py-6">
        © 2025 TopResells. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
