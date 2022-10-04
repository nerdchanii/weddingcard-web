import React, { useRef, useState } from "react";
import BuilderDropArea from "./BuilderDropArea";
import BuilderOptions from "./BuilderOptions";
import FormFacktor from "./FormFacktor";

type Props = {};

const BuilderContainer = (props: Props) => {
  const [device,setDevice] = useState<'iphone'|'android'>('iphone');
  let x,y = 0;
  

  return (
    <div className="min-w-1/2 h-screen bg-red-400 md:w-1/2 md:mb-96 flex flex-col justify-center border-2 p-4 z-20">
      <div className="bg-white z-10">
        <BuilderOptions setDevice={setDevice} /> 
      </div>
      <FormFacktor device={device}>
        <BuilderDropArea />
      </FormFacktor>
    </div>
  );
};

export default BuilderContainer;
