"use client";
import { useTypewriter } from "react-simple-typewriter";

type P = {
  professions: string[];
};

const TypeWriter = ({ professions }: P) => {
  const [text] = useTypewriter({
    words: professions,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <h1 className="text-3xl md:text-5xl font-extrabold text-center">{text}</h1>
  );
};

export default TypeWriter;
