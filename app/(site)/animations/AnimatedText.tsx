import React from "react";
import "./globals.css"; // Import the CSS file

type Props = {
  text: string;
};

const AnimatedText: React.FC<Props> = ({ text }) => {
  return <h1 className="animated-text">{text}</h1>;
};

export default AnimatedText;
