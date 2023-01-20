import Header from "@/components/layout/header";
import Navigation from "@/components/layout/navigator";
import Footer from "@/components/layout/footer";
import Backgorund from "@/components/layout/backgorund";

import "./globals.scss";

export default function RootLayout({ children }) {
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
