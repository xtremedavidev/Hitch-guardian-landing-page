"use client";

import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MobileDrawerWrapperProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileDrawerWapper: FC<
  MobileDrawerWrapperProps & PropsWithChildren
> = ({ open, setOpen, children }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    if (open && drawerRef.current) {
      drawerRef.current.style.transform = "translateY(0)";
    }
  }, [open]);

  return (
    <motion.div
      ref={drawerRef}
      initial={{ y: "100%" }}
      animate={{ y: open ? 0 : "100%", opacity: open ? 1 : 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.y > 100) {
          setOpen(false);
        }
      }}
      className={`fixed bottom-0 left-0 z-[999999] flex h-[calc(100vh-200px)] w-full flex-col items-center overflow-hidden rounded-t-[60px] border-x border-t border-solid border-[#E3E5E8] bg-black/90 uppercase opacity-0 backdrop-blur-md lg:hidden`}
    >
      <div className="mx-auto my-5 h-[4px] w-20 rounded-full bg-white" />
      {children}
    </motion.div>
  );
};
