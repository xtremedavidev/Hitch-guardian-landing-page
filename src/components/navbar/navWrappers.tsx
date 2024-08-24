"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
// import { usePathname } from "next/navigation";
import { FC, PropsWithChildren, useRef, useState } from "react";
import { NavBurger } from "./navburger";
import { MobileDrawer } from "./mobileDrawer";

export const NavScrollWrapper: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const myref = useRef<HTMLDivElement>(null);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (myref.current !== null && !open) {
      if (latest > 150) {
        myref.current.classList.add(
          "bg-white/20",
          "backdrop-blur-sm",
          "backdrop-filter",
          "shadow-lg",
          "drop-shadow-lg",
        );
      } else {
        myref.current.classList.remove(
          "bg-white/20",
          "backdrop-blur-sm",
          "backdrop-filter",
          "shadow-lg",
          "drop-shadow-lg",
        );
      }
    }

    if (previous !== undefined && !open && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // const pathname = usePathname();

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "calc(-100% - 30px)" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-[30px] z-[99] h-[52px] max-h-[52px] w-full px-[5%]"
      >
        <div
          ref={myref}
          className={`flex h-full w-full items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-tr from-[#FFFFFF]/[0.1] via-[#FFFFFF]/[0.29] to-[#FFFFFF]/[0.6] p-[1.06px] text-sm`}
        >
          <div className="flex h-full w-full items-center justify-between rounded-[20px] bg-[#010003] px-[17px] lg:items-end">
            {children}
            <NavBurger open={open} setOpen={setOpen} />
          </div>
        </div>
      </motion.nav>
      <MobileDrawer open={open} setOpen={setOpen} />
    </>
  );
};
