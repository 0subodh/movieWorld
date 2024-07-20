import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "Movie Database Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
