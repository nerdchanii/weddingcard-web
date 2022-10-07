import React from "react";

type Props = {
  children: React.ReactNode;
};

const Registered = ({ children, parent }: Props) => {
  
  return (
    <div
      draggable={true}
      className="border-2 border-sky-500 inline-block"
    >
      {children}
    </div>
  );
};

export default Registered;
