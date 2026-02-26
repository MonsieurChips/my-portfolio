"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function Articles() {
  return (
    <main className="min-h-screen bg-zinc-900">
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <FontAwesomeIcon icon={faBook} className="text-blue-400 text-3xl mr-4" />
          <h1 className="text-5xl font-bold text-white">Articles</h1>
        </div>
        <p className="text-zinc-400 mb-8 text-xl">Read my thoughts.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article cards will go here */}
          <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold text-white mb-2">Coming Soon</h2>
            <p className="text-zinc-400 text-sm">Articles will be published here soon.</p>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold text-white mb-2">Coming Soon</h2>
            <p className="text-zinc-400 text-sm">Articles will be published here soon.</p>
          </div>
          <div className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-blue-500 transition-colors">
            <h2 className="text-xl font-semibold text-white mb-2">Coming Soon</h2>
            <p className="text-zinc-400 text-sm">Articles will be published here soon.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
