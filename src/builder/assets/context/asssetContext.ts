import { createContext } from "react";
export interface AssetContextProps {
    [key: string]: {
      type: string;
      Component: (props:any)=> JSX.Element;
    }
  }

const assetContext = createContext({} as AssetContextProps);

export default assetContext;
