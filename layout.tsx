import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StayOoty | A Gokul Groups Experience",
  description: "Discover peaceful stays, heritage hospitality and memorable experiences in Ooty.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}