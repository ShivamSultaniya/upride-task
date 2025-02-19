import type { Metadata } from "next";
import { Anybody, Geist_Mono } from "next/font/google";
import "./globals.css";

const anybodyLato = Anybody({
  subsets: ["latin"],
  weight: ['400','700'],
});

export const metadata: Metadata = {
  title: "Upride Project",
  description: "React Internship Assignment at Upride: UI Development and Design Challenge ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anybodyLato.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
