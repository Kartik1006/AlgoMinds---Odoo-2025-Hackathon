"use client";

import Input from "@/app/_components/Input";

export default function Search({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search"
      className="ml-auto w-full min-h-12 focus:border-2 focus:border-primary rounded-full m-auto bg-secondary text-accent-light font-semibold px-4 py-2 text-sm"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
