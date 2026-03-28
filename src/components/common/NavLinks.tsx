"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeSwitcher from "./ThemeSwitcher";

const destinations = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Posts", path: "/posts" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "mailto:smahkam57@gmail.com" },
];

function MobileMenu({
  children,
}: {
  children: (close: () => void) => React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-2xl text-muted transition-colors hover:text-foreground"
        aria-label="Open menu"
      >
        <FiMenu />
      </button>

      {typeof window !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
                  onClick={close}
                />

                {/* Modal */}
                <motion.div
                  key="modal"
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="fixed left-1/2 top-1/2 z-50 w-72 -translate-x-1/2 -translate-y-1/2 rounded border border-dotted border-muted/40 bg-background-alt shadow-xl"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-dotted border-muted/30 px-4 py-3">
                    <p className="text-sm text-muted">navigate to:</p>
                    <button
                      onClick={close}
                      className="text-muted transition-colors hover:text-foreground"
                      aria-label="Close menu"
                    >
                      <FiX />
                    </button>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col p-2">
                    {children(close)}
                  </div>

                  {/* Theme switcher */}
                  <div className="border-t border-dotted border-muted/30 px-4 py-3">
                    <ThemeSwitcher embedInMobile={true} />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export default function NavLinks({
  mobileOnly = false,
  desktopOnly = false,
}: {
  mobileOnly?: boolean;
  desktopOnly?: boolean;
}) {
  const pathName = usePathname();

  const Links = ({
    isLargeScreen = false,
    onNavigate,
  }: {
    isLargeScreen?: boolean;
    onNavigate?: () => void;
  }) => (
    <>
      {destinations.map((destination, idx) => {
        const isActive = pathName === destination.path;
        return (
          <Link
            key={idx}
            href={destination.path}
            onClick={onNavigate}
            className={`flex items-center gap-2 rounded px-2 transition-colors hover:bg-background hover:text-foreground ${
              isLargeScreen ? "text-xl" : "py-2.5 text-base"
            } ${isActive ? "text-foreground" : "text-muted"}`}
          >
            {!isLargeScreen && (
              <span className={`text-sm text-green transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}>
                {"~>"}
              </span>
            )}
            {destination.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <>
      {!desktopOnly && (
        <div className="md:hidden">
          <MobileMenu>
            {(close) => <Links onNavigate={close} />}
          </MobileMenu>
        </div>
      )}

      {!mobileOnly && (
        <div className="hidden flex-none flex-row gap-4 md:flex">
          <Links isLargeScreen={true} />
        </div>
      )}
    </>
  );
}
