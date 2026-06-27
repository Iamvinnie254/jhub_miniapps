import type React from "react";

interface ColourWrapperProps {
  children: React.ReactNode;
  colour: string;
  opacity?: number;
}

/* lookup object to fix failing classes */
const colorMap = {
  violet: "bg-red-500",
  indigo: "bg-indigo-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
};

const twColorBuilder = (colour: string) => {
  return colorMap[colour as keyof typeof colorMap];
};

// const twColorBuilder = (color: string, opacity: number = 500) => {
//   return `bg-${color}-${opacity}`;
// };

const ColorWrapper: React.FC<ColourWrapperProps> = ({
  children,
  colour,
  opacity,
}) => {
  return <div className={twColorBuilder(colour)}>{children}</div>;
};

export default ColorWrapper;
