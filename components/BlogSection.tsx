const posts = [
  {
    title:
      "Discord Wants Your ID. Here's Where Your Biometric Data Might End Up.",
    date: "February 21, 2026",
    excerpt:
      "Discord's identity verification partner operates a government platform that files reports to intelligence agencies. Here's what that means for your…",
    slug: "discord-id-biometric-data",
  },
  {
    title: "Well, Microsoft Just Made My VSCodium Setup a Bit More Annoying",
    date: "May 7, 2025",
    excerpt:
      "Microsoft's C/C++ VS Code extension now won't run on forks like VSCodium. Here's what happened and what it means for folks like me.",
    slug: "microsoft-vscodium-annoying",
  },
];

export default function BlogSection() {
  return (
    <section id="blog">
      <p className="text-[#4ade80] text-sm mb-3">$ tail -n 3 ~/blog.log</p>
      <div className="border border-[#2a2a2a] rounded divide-y divide-[#2a2a2a]">
        {posts.map((post) => (
          <div key={post.slug} className="p-4 hover:bg-[#111111] transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <a
                href={`/blog/${post.slug}`}
                className="text-[#22d3ee] text-sm font-semibold hover:underline"
              >
                {post.title}
              </a>
              <span className="text-[#6b7280] text-xs whitespace-nowrap sm:ml-4 flex-shrink-0">
                {post.date}
              </span>
            </div>
            <p className="text-[#6b7280] text-xs leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        ))}
        <div className="p-4">
          <a
            href="/blog"
            className="text-[#22d3ee] text-xs hover:underline"
          >
            cd blog/ →
          </a>
        </div>
      </div>
    </section>
  );
}
