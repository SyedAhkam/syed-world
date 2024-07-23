import NavLinks from "@/components/common/NavLinks";
import Socials from "@/components/common/Socials";

export default function Footer() {
  return (
    <footer className="my-8 flex w-full flex-row justify-between px-8 md:px-16 fixed bottom-0 bg-blue/10 py-1 backdrop-blur-sm">
      <NavLinks />
      <Socials />
    </footer>
  );
}
