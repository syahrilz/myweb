export default function Navbar() {
  return (
    <nav className="border-b border-[#2a2a2a] px-4 py-4">
      <div className="max-w-3xl mx-auto flex items-center gap-6">
        <a
          href="#whoami"
          className="text-[#d1d5db] hover:text-[#22d3ee] transition-colors text-sm"
        >
          [ syahrilz ]
        </a>
        <a
          href="#blog"
          className="text-[#d1d5db] hover:text-[#22d3ee] transition-colors text-sm"
        >
          [ blog ]
        </a>
        <a
          href="#projects"
          className="text-[#d1d5db] hover:text-[#22d3ee] transition-colors text-sm"
        >
          [ projects ]
        </a>
      </div>
    </nav>
  );
}
