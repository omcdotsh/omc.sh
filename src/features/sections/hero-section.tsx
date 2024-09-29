"use client";
import { useRef } from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Confetti } from "@/components/ui/confetti";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="w-full"
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MagicCard>
        <CardHeader>
          <motion.div
            className="flex gap-2 items-center"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <CardTitle>gm friend</CardTitle>
            <motion.div
              className="cursor-pointer relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Confetti emoji={["👋"]} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <CardDescription>
              me, a{" "}
              <span className="font-bold">
                <TypewriterText
                  className="text-secondary-foreground"
                  words={[
                    "fullstack",
                    "web3",
                    "blockchain",
                    "frontend",
                    "backend",
                  ]}
                  as="code"
                />
              </span>{" "}
              engineer with a love for building cool stuff
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-sm"
          >
            shipping the next generation of web3 dApps. from smart contracts to
            user interfaces, i build the future of decentralized tech.
          </motion.p>
        </CardContent>
        <CardFooter>
          <Button variant={"default"}>{">"} get in touch</Button>
        </CardFooter>
      </MagicCard>
    </motion.div>
  );
}
