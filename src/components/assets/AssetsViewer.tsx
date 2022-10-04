import assetContext from "@builder/assets/context/asssetContext";
import Registrable from "@builder/utils/wrapper/Registrable";
import React, { useContext } from "react";

type Props = {};

const AssetsViewer = (props: Props) => {
  const assets = useContext(assetContext);
  const [typeState, setTypeState] = React.useState("all");
  // const save = useSave();
  return (
    <div
      className="
    w-full fixed z-20 bottom-0 h-1/2 ovderflow-y-auto
    md:z-10 md:right-0 md:top-0 md:w-1/2 md:h-full  
    block bg-slate-300 flex-col border-l-2 border-slate-500"
    >
      <nav className="h-20 flex p-2 gap-4 items-center bg-stone-800 justify-around">
        <div className="whitespace-nowrap flex-shrink-1 text-white">types</div>
        <div className="flex flex-1 gap-2.5 overflow-auto h-full bg-stone-500 scrollbar-sm scroll-m-0">
          <button
            onClick={() => setTypeState("base")}
            className="whitespace-nowrap w-full px-4 my-2 rounded-xl bg-sky-400"
          >
            base
          </button>
          <button
            onClick={() => setTypeState("map")}
            className="whitespace-nowrap w-full px-4 my-2 rounded-xl bg-sky-400"
          >
            map
          </button>
          <button
            onClick={() => setTypeState("text")}
            className="whitespace-nowrap w-full px-4 my-2 rounded-xl bg-sky-400"
          >
            text
          </button>
          <button
            onClick={() => setTypeState("account")}
            className="whitespace-nowrap w-full px-4 my-2 rounded-xl bg-sky-400"
          >
            account
          </button>
          <button
            onClick={() => setTypeState("profile")}
            className="whitespace-nowrap w-full px-4 my-2 rounded-xl bg-sky-400"
          >
            profile
          </button>
          <button
            onClick={() => setTypeState("all")}
            className="whitespace-nowrap w-full px-4 my-2 rounded-xl bg-sky-400"
          >
            all
          </button>
        </div>
        <button className="whitespace-nowrap w-max p-2 my-2 rounded-xl border-2 bg-white border-sky-400 text-slate-800" onClick={() => console.log("save")}>save</button>
      </nav>
      <section className="flex-1 grid grid-cols-2 overflow-y-scroll h-full pb-24">
        {Object.entries(assets).map(([key, { Component, type }], idx) => {
          if (type === typeState || typeState === "all")
            return (
              <Registrable className="relative p-8 m-4 border-2 block" key={key.concat(idx.toString())} name={key}>
                <span className="h-4 absolute top-0 left-0">{key}</span>
                <Component />
              </Registrable>
            );
        })}
      </section>
    </div>
  );
};

export default AssetsViewer;
