export default function NowPlayingSection() {
  return (
    <section>
      <p className="text-[#4ade80] text-sm mb-3">
        $ tmux split-window -h
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Listening */}
        <div className="border border-[#2a2a2a] rounded p-4">
          <p className="text-[#4ade80] text-xs mb-3">$ ./listening_to.sh</p>
          <p className="text-[#6b7280] text-xs uppercase tracking-widest mb-2">
            Last Played
          </p>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎵</span>
            <div>
              <p className="text-[#d1d5db] text-sm font-semibold">Young</p>
              <p className="text-[#6b7280] text-xs">VACATIONS</p>
            </div>
          </div>
        </div>

        {/* Watching */}
        <div className="border border-[#2a2a2a] rounded p-4">
          <p className="text-[#4ade80] text-xs mb-3">$ ./watch_history.sh</p>
          <p className="text-[#6b7280] text-xs uppercase tracking-widest mb-2">
            Last Watched
          </p>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📺</span>
            <div>
              <p className="text-[#d1d5db] text-sm font-semibold">
                Tulsa King
              </p>
              <p className="text-[#6b7280] text-xs">S1E7 - Warr Acres</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
