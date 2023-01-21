"use client";
import { useEffect } from "react";
import Header from "@/components/layout/header";
import Navigation from "@/components/layout/navigator";
import Footer from "@/components/layout/footer";
import Backgorund from "@/components/layout/backgorund";

import "./globals.scss";

export default function RootLayout({ children }) {
  useEffect(() => {
    let root = document.documentElement;

    root.addEventListener("mousemove", (e) => {
      root.style.setProperty("--mouse-x", e.clientX + "px");
      root.style.setProperty("--mouse-y", e.clientY + "px");
    });
  }, []);

  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <Navigation />
        {children}
        <Footer />
        <Backgorund />
      </body>
    </html>
  );
}
