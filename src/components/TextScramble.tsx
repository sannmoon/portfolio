import React, { useState, useEffect, useCallback } from "react";

interface TextScrambleProps {
  text: string;
}

const TextScramble: React.FC<TextScrambleProps> = ({ text }) => {
  const [scrambledText, setScrambledText] = useState<string>(text);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);

  const scrambleText = useCallback(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    return text
      .split("")
      .map((char) =>
        char !== " "
          ? characters[Math.floor(Math.random() * characters.length)]
          : " "
      )
      .join("");
  }, [text]);

  useEffect(() => {
    let intervalId: number | undefined;
    let timeoutId: number | undefined;

    if (isScrambling) {
      intervalId = window.setInterval(() => {
        setScrambledText(scrambleText());
      }, 50);

      timeoutId = window.setTimeout(() => {
        setIsScrambling(false);
      }, 300); // 0.3 seconds
    } else {
      setScrambledText(text);
    }

    return () => {
      if (intervalId !== undefined) window.clearInterval(intervalId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [isScrambling, scrambleText, text]);

  const handleMouseEnter = () => {
    setIsScrambling(true);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      className="transition-all duration-200"
    >
      {scrambledText}
    </span>
  );
};

export default TextScramble;
