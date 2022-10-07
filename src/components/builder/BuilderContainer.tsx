import React from "react";
import BuilderDropArea from "./BuilderDropArea";
// import BuilderOptions from "./BuilderOptions";
// import FormFacktor from "./FormFacktor";

type Props = {};

const BuilderContainer = (props: Props) => {

  return (
    <div className="min-w-1/2 h-screen bg-stone-300 md:w-1/2 md:mb-96 flex flex-col justify-center border-2 p-4 z-20">
      <BuilderDropArea />
    </div>
  );
};

export default BuilderContainer;
