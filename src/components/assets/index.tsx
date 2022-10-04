import React from 'react'
import Div from './components/Div'
import Inputs from './components/Inputs'
import Text from './components/Text'
import Link from './components/Link';
import Map from './components/Map';
type Props = {}

type Assets = {
  [key: string]: {
    type: 'base' | 'map' | 'profile' | 'link' | 'text'  | 'account' | 'button'
  }
}


export default {
  "Div": {
    type: 'base',
    Component: Div,
  },
  "Text": {
    type: 'text',
    Component: Text,
  },
  "Image": {
    type: 'base',
    Component: () => <div><img draggable={false} src={'https://via.placeholder.com/150'} alt='hi' /></div>,
  },
  "Button":{
    type: 'base',
    Component: () => <button>Click me</button>,
  },
  "Input":{
    type: 'text',
    Component: Inputs,
  },
  "Link":{
    type: 'text',
    Component: Link,
  },
  "Map":{
    type: 'map',
    Component: Map,
  },
  "Profile":{
    type: 'profile',
    Component: () => (
    <div className='w-36 p-2 flex-col items-center bg-red-200'>
      <img src="http://via.placeholder.com/150" alt='이미지' className='rounded-full'/>
      <div>
        <div className="flex">
          <p className='inline font-bold after:content-[":"] after:px-2'>이름</p>
          <span className='flex-1 text-end'>길동 홍</span>

        </div>
        <div className="flex">
          <p className='inline font-bold after:content-[":"] after:px-2'>이름</p>
          <span className='flex-1 text-end'>길동 홍</span>

        </div>
        <div className="flex">
          <p className='inline font-bold after:content-[":"] after:px-2'>이름</p>
          <span className='flex-1 text-end'>길동 홍</span>

        </div>
        
        
      </div>
      </div>),
  },  
} as Assets;

