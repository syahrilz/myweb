export default function WhoamiSection() {
  return (
    <section id="whoami">
      <p className="text-[#4ade80] text-sm mb-3">$ whoami</p>
      <div className="border border-[#2a2a2a] rounded p-5 flex items-start gap-5">
        <div className="flex-shrink-0 w-16 h-16 border border-[#2a2a2a] rounded flex items-center justify-center text-2xl bg-[#111111]">
          ⌨
        </div>
        <div>
          <h1 className="text-[#f97316] font-bold text-xl mb-2">Syahrilz</h1>
          <p className="text-[#d1d5db] text-sm leading-relaxed">
            Hey, I&apos;m a developer who likes building things for the web.
            Currently messing around with AI and distributed systems.
          </p>
        </div>
      </div>
    </section>
  );
}
