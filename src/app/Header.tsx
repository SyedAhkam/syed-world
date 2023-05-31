import Prompt from "@/components/common/Prompt";
import Stdout from "@/components/common/Stdout";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";

export default function Header() {
  return (
    <nav className="m-8 flex flex-row items-start md:m-16">
      <div className="flex-1 space-y-1">
        <Prompt />
        <Stdout />
      </div>

      <ThemeSwitcher />
    </nav>
  );
}
