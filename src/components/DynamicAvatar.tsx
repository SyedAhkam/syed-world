"use client";

import Image from "next/image";
import { useState  } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function DynamicAvatar() {
  const avatars = [
    { src: "/avatar.jpg", alt: "Author's photo"  },
    { src: "/img/identicon.png", alt: "Author's identicon", extendClass: "scale-110"  },
    { src: "/jumping_cat.gif", alt: "Jumping cat"  },
  ]

  const [currAvatarIdx, setCurrAvatarIdx] = useState(0);

  const currAvatar = avatars.at(currAvatarIdx)!;

  return (
    <motion.div
      key={currAvatarIdx}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 2,
        opacity: { duration: 1 }
      }}
      className="hover:cursor-pointer"
    >
      <Image
        src={currAvatar.src}
        alt={currAvatar.alt}
        fill
        unoptimized={currAvatar.src.endsWith(".gif")}
        className={clsx("cursor-pointer object-cover object-center", currAvatar.extendClass)}
        onClick={(() => setCurrAvatarIdx((prev) => (prev + 1) % avatars.length))}
      />
    </motion.div>
  )
}
