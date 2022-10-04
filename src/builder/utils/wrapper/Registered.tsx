import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

const Registered = ({ children, parent }: Props) => {
  const [currentPosition, setCurrentPosition] = React.useState({ x: 0, y: 20 });
  
  return (
    <div
      draggable={true}
      className="border-2 border-sky-500 inline-block absolute"
      style={{ left: currentPosition.x, top: currentPosition.y }}
    >
      {children}
    </div>
  );
};

export default Registered;
