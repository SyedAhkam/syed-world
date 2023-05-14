import Prompt from "@/components/common/Prompt";
import Stdout from "@/components/common/Stdout";

export default function Header() {
  return (
    <header className="m-16 space-y-1">
      <Prompt />
      <Stdout />
    </header>
  );
}
