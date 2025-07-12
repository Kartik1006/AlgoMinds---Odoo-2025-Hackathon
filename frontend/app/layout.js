import localFont from "next/font/local";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

import { Noto_Sans } from "next/font/google";
import { Barriecito } from "next/font/google";
import Footer from "./_components/Footer";

const anton = Barriecito({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-noto",
});

export const metadata = {
  title: {
    template: "%s | StackIt",
    default: "StackIt",
  },
  description: "Your favourite QnA Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} ${anton.variable} font-noto bg-gradient-to-b from-accent-rust to-accent-light min-h-screen flex flex-col antialiased relative text-primary`}
      >
        {/* //#F7EAC8 
        //F4EDDD */}
        <Header />
        <div className="flex-1 mt-14 px-2 pt-20 py-6 grid mb-4">
          <main className="max-w-7xl px-  mx-auto w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
