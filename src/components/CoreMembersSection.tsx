// app/components/TeamGrid.tsx
"use client"; // Needed if using Next.js 13+ app directory with client components

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Mail, Twitter, X, Search } from "lucide-react";

// Type definitions
interface Person {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  category: string;
  email?: string;
  linkedin?: string
  twitter?: string;
}


const people: Person[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "President",
    description: "Leading strategic vision and organizational growth",
    image: "https://picsum.photos/600/800?random=1",
    category: "Senior Council",
  },
  {
    id: 2,
    name: "David Kim",
    role: "Vice President",
    description: "Driving innovation and operational excellence",
    image: "https://picsum.photos/600/800?random=2",
    category: "Senior Council",
  },
  {
    id: 3,
    name: "Alicia Patel",
    role: "Head of Marketing",
    description: "Crafting stories and strategies that connect",
    image: "https://picsum.photos/600/800?random=3",
    category: "Junior Council",
  },
  {
    id: 4,
    name: "iuyjthfg",
    role: "Head of Marketing",
    description: "Crafting stories and strategies that connect",
    image: "https://picsum.photos/600/800?random=4",
    category: "Junior Council",
  },
  {
    id: 5,
    name: "uyghf",
    role: "Head of Marketing",
    description: "Crafting stories and strategies that connect",
    image: "https://picsum.photos/600/800?random=5",
    category: "Junior Council",
  },
];

export default function TeamGrid() {
  const [selected, setSelected] = useState<Person | null>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(people.map((p) => p.category)))];

  const filteredPeople = people.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.role.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === "All" || p.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#0e0f13] text-white p-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          Core Team
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Meet the dedicated individuals who drive our mission forward and shape our community's future.
        </p>
      </div>

      {/* 🔍 Search + Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
        <div className="flex items-center bg-[#1c1c28] px-3 py-2 rounded-xl w-full md:w-1/2">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by name or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent w-full outline-none text-white placeholder-gray-400"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm transition ${
                filter === cat
                  ? "bg-[#9b8cff] text-black"
                  : "bg-[#1c1c28] text-gray-300 hover:bg-[#2a2a3d]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grouped by category */}
      <div className="space-y-12">
        {/* Senior Council */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#9b8cff]">🌟 Senior Council</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {filteredPeople
              .filter((p) => p.category === "Senior Council")
              .map((person) => (
                <motion.div
                  key={person.id}
                  layoutId={`card-${person.id}`}
                  onClick={() => setSelected(person)}
                  className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-[330px] w-[250px] group"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-lg font-bold text-white">{person.name}</h3>
                    <p className="text-[#9b8cff] font-bold">{person.role}</p>
                    <p className="mt-1 text-sm text-gray-300">{person.description}</p>
                    <div className="flex gap-3 mt-2 text-[#9b8cff]">
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition" />
                      <Mail className="w-5 h-5 group-hover:scale-110 transition" />
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Junior Council */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#9b8cff]">💫 Junior Council</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {filteredPeople
              .filter((p) => p.category === "Junior Council")
              .map((person) => (
                <motion.div
                  key={person.id}
                  layoutId={`card-${person.id}`}
                  onClick={() => setSelected(person)}
                  className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-[330px] w-[250px] group"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 p-4">
                    <h3 className="text-lg font-bold text-white">{person.name}</h3>
                    <p className="text-[#9b8cff] font-bold">{person.role}</p>
                    <p className="mt-1 text-sm text-gray-300">{person.description}</p>
                    <div className="flex gap-3 mt-2 text-[#9b8cff]">
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition" />
                      <Mail className="w-5 h-5 group-hover:scale-110 transition" />
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Expanded Section (Modal) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            layoutId={`card-${selected.id}`}
            className="fixed inset-0 flex items-center justify-center bg-black/70 p-6 z-50"
            onClick={() => {
              setSelected(null);
              setShowEmail(false);
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#12121c] rounded-2xl max-w-[20rem] w-full p-6 shadow-2xl relative"
            >
              <button
                onClick={() => {
                  setSelected(null);
                  setShowEmail(false);
                }}
                className="absolute top-2 right-2 text-gray-400 hover:text-white cursor-pointer font-bold"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-70 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold text-white">{selected.name}</h2>
              <p className="text-[#9b8cff] font-bold">{selected.role}</p>
              <p className="text-gray-300 mt-2">{selected.description}</p>

              <div className="flex gap-4 mt-4">
                <a
                  href={selected.linkedin || "#"}
                  target="_blank"
                  className="flex items-center gap-2 px-2 py-1 rounded-lg bg-[#1c1c28] hover:bg-[hotpink] transition"
                >
                  <Linkedin className="w-5 h-5 text-[#9b8cff]" />
                  <span>LinkedIn</span>
                </a>
                <button
                  onClick={() => setShowEmail((prev) => !prev)}
                  className="flex items-center gap-2 px-2 py-1 rounded-lg bg-[#1c1c28] hover:bg-[hotpink] transition"
                >
                  <Mail className="w-5 h-5 text-[#9b8cff]" />
                  <span>Email</span>
                </button>
              </div>

              {/* Email Reveal */}
              <AnimatePresence>
                {showEmail && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 bg-[#1c1c28] p-3 rounded-lg"
                  >
                    <p className="text-[#9b8cff] font-mono break-all text-sm">
                      {selected.email}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}