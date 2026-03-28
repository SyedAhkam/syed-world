import NavLinks from "@/components/common/NavLinks";
import Socials from "@/components/common/Socials";

export default function Footer() {
  return (
    <footer className="mb-8 mt-4 flex w-full flex-col items-center gap-4 px-8 md:flex-row md:justify-between md:px-16">
      <NavLinks desktopOnly />
      <div className="flex items-center gap-4">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Syed Ahkam</p>
        <span className="text-muted/40">|</span>
        <Socials />
      </div>
    </footer>
  );
}
