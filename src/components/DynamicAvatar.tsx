"use client";

import Image from "next/image";
import { useState  } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function DynamicAvatar() {
  const avatars = [
    { src: "/img/identicon.png", alt: "Author's identicon", extendClass: "scale-110"  },
    { src: "/img/avatar.webp", alt: "Author's avatar"  },
  ]

  const [currAvatarIdx, setCurrAvatarIdx] = useState(0);

  const currAvatar = avatars.at(currAvatarIdx)!;

  return (
    <motion.div
      key={currAvatarIdx}
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 2,
        opacity: { duration: 1 }
      }}
      className="hover:cursor-pointer opacity-50"
    >
      <Image
        src={currAvatar.src}
        alt={currAvatar.alt}
        fill
        className={clsx("object-cover object-center", currAvatar.extendClass)}
        onClick={(() => setCurrAvatarIdx((prev) => prev === 0 ? 1 : 0))}
      />
    </motion.div>
  )
}
