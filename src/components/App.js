import React, { useRef, useState } from 'react'
import '../styles/App.css';
import image from '../image.jpeg'

const App = () => {

  const [height, setHeight] = useState(320)
  const [width, setWidth] = useState(320)
  function handleHeight(e) {
    setHeight(e.target.value)
  }
  function handleWidth(e) {
    setWidth(e.target.value)
  }
  return (
    <div id="main" className='app'>
      <div className="sliders">
        <label htmlFor="height-slider">Height:- {height}px</label>
        <input type="range" name="height-slider" id="height-slider" min={100} max={800} value={height} onChange={handleHeight} />
        
        <label htmlFor="width-slider">Width:- {width}px</label>
        <input type="range" name="width-slider" id="width-slider" min={100} max={800} value={width} onChange={handleWidth} />
      </div>
      <div className="imageContainer">
        <img src={image} alt="image" id='resizable-img' height={height} width={width} />
      </div>
    </div>
  )
}


export default App;
