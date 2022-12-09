import Footer from "./footer";
import "./globals.css";
import Header from "./header";

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
      <body className="bg-background">
        <div className="container mx-16 my-16 flex-auto flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
