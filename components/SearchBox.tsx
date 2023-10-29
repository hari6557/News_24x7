"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!input) return;
    router.push(`/search?term=${input}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex pt-10 max-w-6xl justify-between mx-auto px-5 items-center">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 w-full h-14 rounded-lg placeholder-gray-500 text-gray-500
        bg-transparent outline-none dark:text-orange-400 border border-slate-200 dark:border-orange-200 pl-10"
        placeholder="Search Keywords...."
        value={input}
      />
      <button
        disabled={!input}
        className="text-orange-400 pl-5 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
