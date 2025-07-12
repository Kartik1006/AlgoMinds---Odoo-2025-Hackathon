"use client";

import { useState } from "react";
import { csQuestions } from "@/app/_lib/constants";
// import AskQuestion from "./AskQuestion";
import Filter from "./Filter";
import Search from "./Search";
import Button from "./Button";

export default function Questions() {
  const [activeFilter, setActiveFilter] = useState("Newest");
  const [search, setSearch] = useState("");

  const filteredQuestions = csQuestions
    .filter((q) => {
      if (activeFilter === "Answered") return q.status === "answered";
      if (activeFilter === "Unanswered") return q.status === "unanswered";
      return true;
    })
    .filter((q) => q.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="flex flex-wrap space-y-2 justify-between items-center mb-8">
        <Button>Ask New Question</Button>
        <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        <Search search={search} setSearch={setSearch} />
      </div>

      <section className="space-y-6">
        {filteredQuestions.map((q, idx) => (
          <div
            key={idx}
            className="border border-[--accent-gray] p-6 rounded-xl shadow-sm bg-[--accent-light]"
          >
            <h2 className="text-xl font-semibold text-[--primary] mb-2">
              {q.title}
            </h2>
            <p className="text-[--accent-gray] text-sm mb-4">
              {q.answers.length > 0
                ? q.answers[0].slice(0, 120) + "..."
                : "No answers yet."}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[--accent-gray]">by UserName</span>
              <span className="text-sm bg-white border border-[--accent-gray] px-3 py-1 rounded-full">
                {q.answers.length} answers
              </span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
