import Prompt from "../components/common/Prompt";
import Stdout from "../components/common/Stdout";

export default function Header() {
  return (
    <header className="mx-16 my-16">
      <Prompt />
      <Stdout />
    </header>
  );
}
