import React from 'react'

type Props = {}

const Text = (props: Props) => {
  const [text, setText] = React.useState("Hello World")
  const [edit, setEdit] = React.useState(false)

  if(edit){
    return (
      <input
        className='block w-full'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        onBlur={()=>{setText(text);setEdit(false)}}
        
      />
    )
  }
  return (
    <p    
      className='block'
      onClick={()=>setEdit(true)}
      onFocus={()=>setEdit(true)}
    >
      {text}
    </p>)

}

export default Text