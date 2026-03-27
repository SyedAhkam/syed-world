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
    <div className="relative w-full h-full cursor-pointer" onClick={() => setCurrAvatarIdx((prev) => (prev + 1) % avatars.length)}>
      {avatars.map((avatar, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: idx === 0 ? 1 : 0 }}
          animate={{ opacity: idx === currAvatarIdx ? 1 : 0 }}
          transition={{ ease: "linear", duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            unoptimized={avatar.src.endsWith(".gif")}
            className={clsx("object-cover object-center", avatar.extendClass)}
          />
        </motion.div>
      ))}
    </div>
  )
}
