"use client";

import { SITE_CONFIG } from "@/lib/site-config";
import { ThemeToggle } from "../theme/ThemeToggle";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      className="sticky top-0 z-10 flex h-[53px] w-full items-center gap-1 justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <motion.h1
          className="text-xl ml-2 font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {SITE_CONFIG.name}
        </motion.h1>
        <motion.div
          className="ml-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            className="h-[1px] w-16 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mr-2"
      >
        <ThemeToggle />
      </motion.div>
    </motion.header>
  );
};
