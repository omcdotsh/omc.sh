"use client";

import { useScopedI18n } from "@/locales/client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link2, Lock, Globe } from "lucide-react";

export const CtaSection = () => {
  const t = useScopedI18n("cta-section");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full p-8 bg-primary/10 rounded-lg shadow-lg"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold mb-6 text-primary text-center"
      >
        {t("title")}
      </motion.h2>
      <div className="flex flex-col gap-6 mb-8">
        {[
          {
            icon: Link2,
            title: t("1.title"),
            description: t("1.description"),
          },
          {
            icon: Lock,
            title: t("2.title"),
            description: t("2.description"),
          },
          {
            icon: Globe,
            title: t("3.title"),
            description: t("3.description"),
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center p-6 bg-background rounded-lg "
          >
            <feature.icon className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
