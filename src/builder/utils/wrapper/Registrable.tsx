import React from 'react'

type Props = {
  className?: string;
  children: React.ReactNode;
  name: string;
}

const Registrable = ({className, children, name}: Props) => {
  return (
    <div 
      className={className}
      draggable={true}
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", name);
        }}
      onDrag={(e) => {
        e.preventDefault();
      }}  
      
    >
      {children}
    </div>
  )
}

export default Registrable