import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/app/assets/css/App.scss";
import "tippy.js/dist/tippy.css";  // Import Tippy.js styles globally
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Advaith Malka's Portfolio",
  description: "Advaith Malka's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-10`}
      >
        <Navbar /> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
