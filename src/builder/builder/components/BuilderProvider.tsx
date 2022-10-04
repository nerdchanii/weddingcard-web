import React from 'react'
import builderContext from '../context/builderContext'

type DomTree = {
  [key: string]: {
    name: string;
    component: React.ComponentType;
    children?: DomTree;
  }
}


type Props = {
  children: React.ReactNode
  tree: DomTree;
}

const BuilderProvider = ({children}:Props) => {
  return(
    <builderContext.Provider value={{}}>
      {children}
    </builderContext.Provider>
  )
}





export default BuilderProvider