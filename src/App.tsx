import { useContext, useEffect } from "react"
import builderContext from "@builder/builder/context/builderContext";
import Assets from "@components/assets";
import assetContext, { AssetContextProps } from "@builder/assets/context/asssetContext";
import AssetsViewer from "@components/assets/AssetsViewer";
import BuilderContainer from "@components/builder/BuilderContainer";

function App() {
  const context = useContext<AssetContextProps>(assetContext);
  return (
    <div className="App h-screen bg-stone-300 block">
      <BuilderContainer />
      <AssetsViewer />
    </div>
  )
}

export default App
