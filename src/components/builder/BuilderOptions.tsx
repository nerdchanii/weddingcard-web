import React from "react";

type Props = {
  setDevice: React.Dispatch<React.SetStateAction<"iphone" | "android">>;
};

const BuilderOptions = ({setDevice}: Props) => {
  
  return (
    <div className="bg-white">
      <div>device</div>
      <select>
        <option onSelect={(e)=>setDevice('iphone')}>iphone 12</option>
        <option onSelect={(e)=>setDevice('android')}>android</option>
      </select>
    </div>
  );
};

export default BuilderOptions;
