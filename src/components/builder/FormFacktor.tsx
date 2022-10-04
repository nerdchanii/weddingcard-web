import React from 'react';

type Props = {
  device: 'iphone'|'android';
  children: React.ReactNode;
};

const FormFacktor = ({device,children}: Props) => {
  let x,y = 0;
  if(device === 'iphone') {
    x = 375;
    y = 812;
  } else {
    x = 360;
    y = 640;
  }

  
  if(device === 'iphone'){
    return (
    <div style={{width:x, height:y}} className="border-4 m-auto border-slate-400 rounded-3xl bg-black p-2.5 relative z-30">
      <div className='absolute left-1/2 w-2/3 -translate-x-1/2 h-8 flex bg-black rounded-b-2xl -translate-y-1 shadow-md z-10 shadow-slate-400'>
        <div className="absolute w-1/4 h-1/4 bg-slate-500 rounded-2xl left-1/2 top-1/2 -translate-x-3/4 -translate-y-1/2 shadow-inner shadow-black"></div>
        <div className="absolute w-2 h-2 bg-slate-500 rounded-full left-2/3 top-1/2 -translate-y-1/2 shadow-inner shadow-black"></div>
      </div>
      <div className='h-full rounded-2xl bg-white shadow-slate-400 shadow-inner p-1'>
      <div className='h-6 -z-10'></div>
            {children}
      </div>
    </div>
    )
  }
    return (
    <div style={{width:x, height:y}} className="border-4 m-auto border-black rounded-3xl bg-black p-1">
      <div className=' border-2 h-full rounded-2xl bg-white'>
        <div className=''></div>
          <div>
            {children}
          </div>
      </div>
    </div>
  )
}

export default FormFacktor