import React from 'react'

type Props = {}

const Map = (props: Props) => {
  const [address, setAddress] = React.useState('인천서구 석남동 1가 1-1')
  
  return (
    <section>
    <header>
      <h3>오시는 길</h3>
    </header>
    <footer><address className="inline-block">{address}</address></footer>
    </section>
  )
}

export default Map