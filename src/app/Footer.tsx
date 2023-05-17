import NavLinks from "@/components/common/NavLinks";
import Socials from "@/components/common/Socials";

export default function Footer() {
  return (
    <footer className="my-8 flex w-full flex-row justify-between px-20">
      <NavLinks />
      <Socials />
    </footer>
  );
}
