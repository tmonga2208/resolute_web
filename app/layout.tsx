import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";



export const metadata: Metadata = {
  title: "The Resolute Mind",
  description: "Founded by Kriti Monga, a dedicated Sport and Performance Psychologist in India, we specialize in helping athletes and organizations unlock their full potential by cultivating mental resilience and emotional strength.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
