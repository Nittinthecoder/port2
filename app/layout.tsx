import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// @ts-ignore
import StarCanvas from "../components/main/Starbackground";
import Navbar from "../components/main/Navbar";
import Contact from "@/components/main/Contact";
// import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nittin Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}