"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomeLink() {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
    if (clicked) {
      setSpin(true);
      setTimeout(() => {
        setSpin(false);
        setClicked(false);
      }, 325); // remove the spin class after 1 second
    }
  };

  return (
    <Link
      href="/"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-gradient-to-r via-red-500 from-orange-400 to-purple-600 bg-clip-text text-transparent text-xl font-bold transition-transform hover:scale-110 ${
        spin ? "animate-spin" : ""
      }`}
    >
      Grant
    </Link>
  );
}
