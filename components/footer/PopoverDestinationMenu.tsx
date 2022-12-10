import { useState, createRef } from "react";
import { usePopper } from "react-popper";
import { createPopper } from "@popperjs/core";
import Link from "next/link";

export default function PopoverDestinationMenu({
  destinations,
}: {
  destinations: Array<{ name: string; path: string; isActive: boolean }>;
}) {
  const [popoverShow, setPopoverShow] = useState(false);
  const btnRef = createRef();
  const popoverRef = createRef();
  const openPopover = () => {
    // @ts-ignore
    createPopper(btnRef.current, popoverRef.current, {
      placement: "top",
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className="text-blue-500 bg-transparent active:bg-blue-600 rounded border border-solid border-blue px-6 py-3 font-bold outline-none transition-all duration-150 ease-linear hover:bg-blue focus:outline-none"
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            // @ts-ignore
            ref={btnRef}
          >
            <span
              className={
                "text-2xl " + (popoverShow ? "text-magenta" : "text-blue")
              }
            >
              
            </span>
          </button>
          <div
            className={popoverShow ? "" : "hidden"}
            // @ts-ignore
            ref={popoverRef}
          >
            <div className="flex flex-col space-y-2">
              {destinations.map((destination) => (
                <Link
                  href={destination.path}
                  key={destination.name}
                  className={
                    "hover:underline " +
                    (destination.isActive ? "text-foreground" : "")
                  }
                >
                  {destination.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
