import NavLinks from "@/components/common/NavLinks";
import Socials from "@/components/common/Socials";

export default function Footer() {
  return (
    <div className="fixed bottom-0 mx-16 my-8 flex w-full flex-row justify-between pr-20">
      <NavLinks />
      <Socials />
    </div>
  );
}
