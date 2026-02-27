import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syahrilz",
  description:
    "Hey, I'm a developer who likes building things for the web. Currently messing around with AI and distributed systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-mono bg-[#0a0a0a] text-[#d1d5db] min-h-screen">
        {children}
      </body>
    </html>
  );
}
