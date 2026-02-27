const skills = [
  {
    category: "LANGUAGES",
    items: [
      { icon: "🔷", name: "TypeScript" },
      { icon: "🐍", name: "Python" },
    ],
  },
  {
    category: "FRAMEWORKS",
    items: [
      { icon: "▲", name: "Next.js" },
      { icon: "🔥", name: "SvelteKit" },
      { icon: "💨", name: "Tailwind" },
    ],
  },
  {
    category: "INFRA",
    items: [
      { icon: "🍞", name: "Bun" },
      { icon: "🐘", name: "PostgreSQL" },
      { icon: "🐳", name: "Docker" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section>
      <p className="text-[#4ade80] text-sm mb-3">$ lsblk -o CATEGORY,NAME</p>
      <div className="border border-[#2a2a2a] rounded divide-y divide-[#2a2a2a]">
        {skills.map((group) => (
          <div
            key={group.category}
            className="p-4 flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <span className="text-[#6b7280] text-xs w-28 flex-shrink-0 uppercase tracking-widest">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1 border border-[#2a2a2a] rounded px-2 py-1 text-xs text-[#d1d5db] hover:border-[#4ade80] transition-colors cursor-default"
                >
                  <span>{skill.icon}</span>
                  <span>{skill.name}</span>
                  <span className="text-[#6b7280]">→</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
