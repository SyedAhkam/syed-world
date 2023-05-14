import { Metadata } from "next";

import { fira_code } from "@/fonts";

import Header from "./Header";
import Footer from "./Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Syed's World",
    template: "%s | Syed's World",
  },
  description:
    "Personal site of Syed Ahkam, where I write about things I like and things I do.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fira_code.variable}`} data-theme="tokyo-night">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
