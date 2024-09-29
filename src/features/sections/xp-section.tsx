"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MagicCard } from "@/components/ui/magic-card";
import { SITE_CONFIG } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Web3 Developer",
    company: "Blockchain Inc.",
    date: "2022 - Present",
    description:
      "Leading development of decentralized applications and smart contracts.",
  },
  {
    title: "Fullstack Developer",
    company: "Tech Solutions Ltd.",
    date: "2020 - 2022",
    description:
      "Developed and maintained web applications using React and Node.js.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Co.",
    date: "2018 - 2020",
    description: "Assisted in building and testing various software projects.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Co.",
    date: "2018 - 2020",
    description: "Assisted in building and testing various software projects.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Co.",
    date: "2018 - 2020",
    description: "Assisted in building and testing various software projects.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Co.",
    date: "2018 - 2020",
    description: "Assisted in building and testing various software projects.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Co.",
    date: "2018 - 2020",
    description: "Assisted in building and testing various software projects.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Co.",
    date: "2018 - 2020",
    description: "Assisted in building and testing various software projects.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Co.",
    date: "2018 - 2020",
    description: "Assisted in building and testing various software projects.",
  },
];

export function ExperienceSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MagicCard
        className="w-full"
        gradientColor={SITE_CONFIG.brand.primary + "20"}
      >
        <CardHeader>
          <motion.div
            className="flex gap-2 items-center "
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <CardTitle>My Experience</CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <motion.div
              className="absolute left-[2.75px] top-0 bottom-0 w-0.5 bg-primary"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                item={exp}
                index={index}
                last={index === experiences.length - 1}
              />
            ))}
          </div>
        </CardContent>
      </MagicCard>
    </motion.div>
  );
}

function ExperienceItem({
  item,
  index,
  last,
}: {
  item: ExperienceItem;
  index: number;
  last: boolean;
}) {
  return (
    <motion.div
      className={cn(["flex", !last && "mb-8"])}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <div className="mr-2">
        <div className="flex h-2 w-2 items-center justify-center rounded-full bg-primary">
          <div className="h-1 w-1 rounded-full bg-background" />
        </div>
      </div>
      <div>
        <p className="text-xs text-primary">{item.date}</p>
        <h3 className="text-md font-semibold">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.company}</p>
        <p className="mt-2 text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
}
