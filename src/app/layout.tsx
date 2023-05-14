import { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className} data-theme="tokyo-night">
        {children}
      </body>
    </html>
  );
}
