"use client";

import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function ScrollToBottom() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;
      setVisible(distanceFromBottom > 200);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
      className="fixed bottom-8 right-8 text-3xl text-muted hover:text-foreground transition-colors"
      aria-label="Scroll to bottom"
    >
      <MdKeyboardDoubleArrowDown />
    </button>
  );
}
