import React, { useEffect, useRef } from "react";
import JSConfetti from "js-confetti";

interface ConfettiProps {
  emoji?: string[];
}

export const Confetti: React.FC<ConfettiProps> = ({ emoji = ["👋"] }) => {
  const jsConfettiRef = useRef<JSConfetti | null>(null);

  useEffect(() => {
    // Initialize JSConfetti instance
    jsConfettiRef.current = new JSConfetti();

    // Clean up function
    return () => {
      if (jsConfettiRef.current) {
        jsConfettiRef.current.clearCanvas();
      }
    };
  }, []);

  const handleClick = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti({
        emojis: emoji,
        emojiSize: 50,
        confettiNumber: 50,
      });
    }
  };

  return (
    <span
      onClick={handleClick}
      className="cursor-pointer hover:scale-110 transition-transform hover:rotate-12"
    >
      {emoji[0]}
    </span>
  );
};
