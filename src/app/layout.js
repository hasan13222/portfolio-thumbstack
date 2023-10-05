'use client'
import Header from "@/components/Header";
import "./globals.css";
import TopBar from "@/components/TopBar";
import { useState } from "react";

export const metadata = {
  title: "Web Developer- Jamil",
  description: "React/Next Developer",
};

export default function RootLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <html lang="en">
      <body>
        <div className="full_container portfolio">
          <TopBar showMenu={showMenu} setShowMenu={setShowMenu}/>
          <Header showMenu={showMenu} />
          <main className="main">
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
