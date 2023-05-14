import { Metadata } from "next";

import "./globals.css";
import { fira_mono } from "@/fonts";

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
      <body className={fira_mono.className} data-theme="tokyo-night">
        {children}
      </body>
    </html>
  );
}
