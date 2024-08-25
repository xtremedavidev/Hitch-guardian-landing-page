"use client";
import { cn } from "@/utils";
import { motion, useInView } from "framer-motion";
import { FC, PropsWithChildren, useRef } from "react";

interface ScrollRevealRightProps {
  className?: string;
}

export const ScrollRevealRight: FC<
  PropsWithChildren & ScrollRevealRightProps
> = ({ className, children }) => {
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { amount: "all", once: true });

  // const variants = {
  //   hidden: { opacity: 0, x: "-100%" },
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  // };
  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: "100%" }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : "100%",
        transition: { duration: 0.5 },
      }}
      whileInView={{ opacity: 1, x: 0 }}
      // variants={variants}
      className={cn(``, className)}
    >
      {children}
    </motion.div>
  );
};
