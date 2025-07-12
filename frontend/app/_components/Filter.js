"use client";

import { useState } from "react";
import Button from "@/app/_components/Button";

const filters = ["Newest", "Answered", "Unanswered"];

export default function Filter({ activeFilter, setActiveFilter }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (filter) => {
    setActiveFilter(filter);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <Button type="filter" onClick={() => setIsOpen(!isOpen)}>
        Apply Filter ▾
      </Button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleSelect(filter)}
                className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[--accent-light] ${
                  activeFilter === filter
                    ? "font-semibold text-[--primary]"
                    : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
