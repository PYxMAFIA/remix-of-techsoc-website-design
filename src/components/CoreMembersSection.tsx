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
    id: 4,
    name: "Piyush Kumar",
    role: "Tech Co-Head",
    description: "eat, sleep, learn, code",
    image: "./Members/piyush.jpg",
    category: "Junior Council",
    email: "piyus.useless@gmail.com",
    linkedin: "https://www.linkedin.com/in/piyus-kumar-py/",
  },
    {
    id: 5,
    name: "Bibhu Kumar Singh",
    role: "Tech co-head",
    description: "Co-Heading the pulse of technology at RoundTable.",
    image: "./Members/bibhu.jpg",
    category: "Junior Council",
    email: "bibhukumarsingh355@gmail.com",
    linkedin: "https://www.linkedin.com/in/bibhu-kumar-singh-6b7684316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 20,
    name: "Sujal",
    role: "President",
    description: "Conversation are my currency and I invest them to create a value",
    image: "./Members/sujal.jpeg",
    category: "Senior Council",
    email: "kumarsuajal1356@gmail.com",
    linkedin: "https://www.linkedin.com/in/sujal-kumar-b49141292/",
  },
  {
    id: 64,
    name: "Soumil Malhotra",
    role: "Tech co-head",
    description: "Work and work",
    image: "./Members/soumil.jpg",
    category: "Junior Council",
    email: "malhotrasoumil1@gmail.com",
    linkedin: "https://www.linkedin.com/in/soumil-malhotra-3b6a27334/",
  },
    {
    id: 14,
    name: "Chandan Kumar Aryan",
    role: "Vice-President",
    description: "Constantly striving to live life to the fullest while embracing challenge.",
    image: "./Members/aryan.jpg",
    category: "Senior Council",
    email: "ckaryan2004@gmail.com",
    linkedin: "https://www.linkedin.com/in/aryan-kr-9b4488319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
    {
    id: 19,
    name: "Vaibhav Jain",
    role: "General Secretary",
    description: "Smiling through the chaos",
    image: "./Members/1.jpg",
    category: "Senior Council",
    email: "vaibhav2019jain@gmail.com",
    linkedin: "https://www.linkedin.com/in/vaibhav-jain-dsa-dev-design?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 1,
    name: "Gautam Swami",
    role: "Corporate Co-Head",
    description: "Ctrl+Z is life’s greatest gift—if only it worked outside computers.",
    image: "./Members/gautam.jpg",
    category: "Junior Council",
    email: "gautamdtu24@gmail.com",
    linkedin: "https://linkedin.com/in/gautam2401",
  },
  {
    id: 2,
    name: "Nitiksh",
    role: "Tech team",
    description: "Work collaborate network build and grow",
    image: "./Members/nitiksh.jpg",
    category: "Junior Council",
    email: "nitikshpal@gmail.com",
    linkedin: "https://www.linkedin.com/in/nitiksh-pal-924275274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 3,
    name: "Archit Arora",
    role: "Co head (Design)",
    description: "Exploring the world through creativity and design",
    image: "./Members/archit.jpg",
    category: "Junior Council",
    email: "architarora24022006@gmail.com",
    linkedin: "https://www.linkedin.com/in/archit-arora-134390321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 6,
    name: "Jayesh Joshi",
    role: "Joint Secretary",
    description: "Learning, leading, and evolving every day with the society.",
    image: "./Members/jayesh.jpg",
    category: "Senior Council",
    email: "jayeshjoshi2005@gmail.com",
    linkedin: "https://www.linkedin.com/in/jayesh-joshi-b99464294/",
  },
  {
    id: 7,
    name: "Arjun Kumar Dubey",
    role: "Design Co-Head",
    description: "I love my macbook :)",
    image: "./Members/arjun.jpg",
    category: "Junior Council",
    email: "reboostify@gmail.com",
    linkedin: "https://www.linkedin.com/in/akd9/",
  },
  {
    id: 10,
    name: "Rohit",
    role: "Treasurer",
    description: "Treasurer by role, team player by heart.",
    image: "./Members/rohit.jpg",
    category: "Senior Council",
    email: "rohit.dtu2027@gmail.com",
    linkedin: "https://www.linkedin.com/in/rohit-dtu",
  },
  {
    id: 12,
    name: "Hariom Ji Rai",
    role: "Operations Co-Head",
    description: "Passionate about operational excellence and making complex systems run smoothly.",
    image: "./Members/hariom.jpg",
    category: "Junior Council",
    email: "typepee12389@gmail.com",
    linkedin: "https://www.linkedin.com/in/hariom-ji-rai-040a12334",
  },
  {
    id: 13,
    name: "Mayank Gupta",
    role: "Operations co-head",
    description: "It is a great experience to be a part of junior council after being working as a volunteer in first year.",
    image: "./Members/mayank.jpg",
    category: "Junior Council",
    email: "mg0129983@gmail.com",
    linkedin: "https://www.linkedin.com/in/mayank-gupta-230524311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 16,
    name: "Vandit Bajaj",
    role: "Finance Co head",
    description: "Driving, innovation and operational excellence",
    image: "./Members/vandit.jpeg",
    category: "Junior Council",
    email: "vanditbajaj15@gmail.com",
    linkedin: "Vandit Bajaj",
  },
  {
    id: 17,
    name: "Shivanshika Sahani",
    role: "Coorporate Co-head",
    description: "Keep compiling dreams until they run without errors.",
    image: "./Members/shivanshika.jpg",
    category: "Junior Council",
    email: "shivisahani09@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivanshika-sahani-29b821248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 18,
    name: "Bhupender Nayak",
    role: "Design CO-head",
    description: "Its design that fuels your imagination",
    image: "./Members/bhupi.jpeg",
    category: "Junior Council",
    email: "graphicdesigner321q@gmail.com",
    linkedin: "https://www.linkedin.com/in/bhupendernayak/",
  }
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
