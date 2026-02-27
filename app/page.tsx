import Navbar from "@/components/Navbar";
import WhoamiSection from "@/components/WhoamiSection";
import NowPlayingSection from "@/components/NowPlayingSection";
import BlogSection from "@/components/BlogSection";
import SkillsSection from "@/components/SkillsSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        <WhoamiSection />
        <NowPlayingSection />
        <BlogSection />
        <SkillsSection />
        <ContactsSection />
      </div>
      <Footer />
    </main>
  );
}
