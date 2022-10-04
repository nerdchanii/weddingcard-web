import assetContext from '@builder/assets/context/asssetContext';
import Registered from '@builder/utils/wrapper/Registered';
import React, { Component, useContext } from 'react'

type Props = {}

const BuilderDropArea = (props: Props) => {
  const assets = useContext(assetContext);
  const [components, setComponents] = React.useState<React.ComponentType[]>([]);
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const data = e.dataTransfer.getData("text/plain");
    if(!data) return;
    const { Component } = assets[data];
    console.log(Component, data);
    setComponents([...components, Component]);
  }

  return (
    <div
    className='relative h-full bg-red-100 z-10'
    onDrop={onDrop}
    onDragOver={(e) => {
      e.preventDefault();
    }}
    >
      {components && components.map((Component,idx)=>{
        return (<Registered><Component key={idx} /></Registered>)})}
    </div>
  )
}

export default BuilderDropArea