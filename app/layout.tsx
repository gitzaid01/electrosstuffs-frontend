import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ElectroStuffs — Engineering Digital Experiences",
  description:
    "A global creative engineering studio crafting high-impact digital products for industry leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}