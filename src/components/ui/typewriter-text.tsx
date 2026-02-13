"use client";

import { useEffect, useState } from "react";
import React from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  words: string[];
  as?: React.ElementType;
  className?: string;
  cursorClassName?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  as: Component = "code",
  className,
  cursorClassName,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentText === word) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        } else {
          setCurrentText(
            word.substring(
              0,
              isDeleting ? currentText.length - 1 : currentText.length + 1
            )
          );
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const Wrapper = Component as React.ComponentType<{
    className?: string;
    children?: React.ReactNode;
  }>;
  return (
    <Wrapper className={cn("relative", className)}>
      {currentText}
      <span
        className={cn(
          "inline-block w-[2px] h-[1em] bg-current ml-[2px]",
          { invisible: !showCursor },
          cursorClassName
        )}
      />
    </Wrapper>
  );
};
