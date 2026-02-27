const contacts = [
  { icon: "🐙", label: "GitHub", handle: "syahrilz", href: "https://github.com/syahrilz" },
  { icon: "💬", label: "Discord", handle: "syahrilz", href: "#" },
  { icon: "▶️", label: "YouTube", handle: "syahrilz", href: "#" },
  { icon: "📸", label: "Instagram", handle: "syahrilz", href: "#" },
  { icon: "🐦", label: "Twitter/X", handle: "syahrilz", href: "#" },
];

export default function ContactsSection() {
  return (
    <section>
      <p className="text-[#4ade80] text-sm mb-3">$ cat contacts.txt</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href !== "#" ? "_blank" : undefined}
            rel={contact.href !== "#" ? "noopener noreferrer" : undefined}
            className="border border-[#2a2a2a] rounded p-3 flex items-center gap-2 text-[#d1d5db] hover:border-[#4ade80] transition-colors group"
          >
            <span className="text-lg">{contact.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6b7280]">{contact.label}</p>
              <p className="text-xs truncate">{contact.handle}</p>
            </div>
            <span className="text-[#6b7280] group-hover:text-[#4ade80] transition-colors text-xs">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
