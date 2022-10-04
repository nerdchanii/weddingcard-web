import React, { useState } from 'react'

type Props = {
  children: React.ReactNode
}

const Div = ({children}:Props) => {
  return (
    <div className='bg-red-500 w-20 h-20'>{children}</div>
  )
}

export default Div;