import type { Metadata } from "next";
import {  JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Password generator app",
  description: "Generate secure passwords with this password generator app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.className} antialiased bg-deepBlack`}
      >
        {children}
      </body>
    </html>
  );
}
