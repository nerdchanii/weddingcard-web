import assetContext, { AssetContextProps } from "./asssetContext";
import Assets from "../../../components/assets";
type Assets = {
  [key: string]: {
    name: string;
    Component: () => JSX.Element;
  }
}

type AssetProviderProps ={
  children: React.ReactNode;
  assets: AssetContextProps;
};

const AssetProiver = ({ children, assets}:AssetProviderProps)=>{
  return(<assetContext.Provider value={assets}>
    {children}
  </assetContext.Provider>
  );
}

export default AssetProiver;