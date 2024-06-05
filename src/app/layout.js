import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Volkan Abaoglu - Software Engineer",
  description: "Personal website of Volkan Abaoglu, a software engineer based in Ankara, TR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}