import Footer from "./footer";
import "./globals.css";
import Header from "./header";
import localFont from "@next/font/local";

const firaCode = localFont({
  src: [
    {
      path: "../public/static/fonts/FiraCode/light-mono.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/static/fonts/FiraCode/regular-mono.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/static/fonts/FiraCode/medium-mono.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/static/fonts/FiraCode/semibold-mono.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/static/fonts/FiraCode/bold-mono.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-firacode",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={firaCode.variable + " bg-background font-mono"}>
        <div className="min-h-screen w-full flex-auto flex-col">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
