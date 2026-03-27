import { Metadata } from "next";

import { firaCode, firaSans } from "@/fonts";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToBottom from "@/components/common/ScrollToBottom";

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
      <body
        className={`${firaCode.variable} ${firaSans.variable} flex min-h-screen flex-col`}
        data-theme="tokyo-night"
      >
        <Header />
        <main className="flex-1 basis-0">{children}</main>
        <Footer />
        <ScrollToBottom />
      </body>
    </html>
  );
}
