import React from "react";
import ColorWrapper from "../colorWrapper/ColorWrapper";

interface RainbowWrapperProps {
  children: React.ReactNode;
  index: number;
  opacity?: number;
}

const rainbowColours = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

const RainbowWrapper: React.FC<RainbowWrapperProps> = ({
  children,
  index,
  opacity,
}) => {
  const colour = rainbowColours[index % rainbowColours.length];

  return (
    <ColorWrapper colour={colour} opacity={opacity}>
      {children}
    </ColorWrapper>
  );
};

export default RainbowWrapper;
