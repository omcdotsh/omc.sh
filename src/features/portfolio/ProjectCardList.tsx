import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { MagicCard } from "../../components/ui/magic-card";
import { Project } from "./projects.types";
import { ExternalLinkIcon } from "lucide-react";
import { useCurrentLocale } from "@/locales/client";

export const ProjectCardList = ({
  items,
  className,
}: {
  items?: Project[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const locale = useCurrentLocale();

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 auto-rows-fr", className)}
    >
      {items?.map((item, idx) => (
        <Link
          href={item?.link || "#"}
          key={item?.link}
          target="_blank"
          className="relative group block p-1 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full  bg-primary/[0.8] block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="w-full">
            <div className="relative">
              <Image
                src={item.imagePath}
                alt={item.title}
                width={300}
                height={300}
                className="inset-0  w-full aspect-[16/10] rounded-lg object-cover object-center"
              />
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    className="absolute top-2 right-2 bg-primary/80 p-1 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLinkIcon className="w-4 h-4 text-background" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="p-2">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {item.description[locale as keyof typeof item.description]}
              </CardDescription>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <MagicCard
      className={cn(
        "rounded-lg h-full w-full border border-primary/30 overflow-hidden bg-card  group-hover:border-primary relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </MagicCard>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-semibold tracking-wide", className)}>{children}</h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "tracking-wide leading-relaxed text-sm text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
};
