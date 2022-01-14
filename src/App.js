import './App.css';
import { useState, useCallback } from 'react'

function App() {
  const [gradient, setGradient] = useState({
    color1: 'rgb(255,0,0)',
    color2: 'rgb(0,255,0)',
    color3: 'rgb(0,0,255)',
    degrees: 180
  })
  const [gradientStyles, setGradientStyles] = useState({
    backgroundColor: 'rgb(255,0,0)',
    backgroundImage: `linear-gradient(180deg, rgb(255,0,0) 0%, rgb(0,255,0) 50%, rgb(0,0,255) 100%)`,
  })

  const getNewGradient = () => {
    let red1st = Math.floor(Math.random()*255)
    let red2nd = Math.floor(Math.random()*255);
    let red3rd = Math.floor(Math.random()*255);

    let green1st = Math.floor(Math.random()*255);
    let green2nd = Math.floor(Math.random()*255);
    let green3rd = Math.floor(Math.random()*255);

    let blue1st = Math.floor(Math.random()*255);
    let blue2nd = Math.floor(Math.random()*255);
    let blue3rd = Math.floor(Math.random()*255);

    let color1 = 'rgb(' + red1st + ','+ green1st + ',' + blue1st + ')';
    let color2 = 'rgb(' + red2nd + ','+ green2nd + ',' + blue2nd + ')';
    let color3 = 'rgb(' + red3rd + ','+ green3rd + ',' + blue3rd + ')';

    setGradient({
      color1: color1,
      color2: color2,
      color3: color3,
      degrees: 180,
    })
    setGradientStyles({backgroundColor: color1,
    backgroundImage: `linear-gradient(180deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`,})
  }

  const handleDegreeChange = useCallback((deg) => {
    let copyOfGradient = gradient
    copyOfGradient = {...copyOfGradient, degrees: deg}
    setGradient(copyOfGradient)
  },[gradient, setGradient])

  const copyColorToClipboard = (color) => {
      navigator.clipboard.writeText(color)
  }
 



  return (
    <div className="App" style={{backgroundColor: gradient.color1,
    backgroundImage: `linear-gradient(${gradient.degrees}deg, ${gradient.color1} 0%, ${gradient.color2} 50%, ${gradient.color3} 100%)`,}}>
      <button id="switchGradientButton" onClick={getNewGradient}>
          switch it up
      </button>
      <div id="colorsUsed">
        <p style={{minHeight: '20px', padding: '10px', textAlign: 'center', backgroundColor: gradient.color1}}>{gradient.color1} <i class="far fa-clipboard"></i></p>
        <p style={{minHeight: '20px', padding: '10px', textAlign: 'center', backgroundColor: gradient.color2}}>{gradient.color2}</p>
        <p style={{minHeight: '20px', padding: '10px', textAlign: 'center', backgroundColor: gradient.color3}}>{gradient.color3}</p>
        <p style={{fontSize: '24px'}}>{gradient.degrees} &#176;</p>
      </div>
      <p>Background color: {gradientStyles.backgroundColor}</p>
      <p>Background image: {`linear-gradient(${gradient.degrees}deg, ${gradient.color1} 0%, ${gradient.color2} 50%, ${gradient.color3} 100%)`}</p>
      <div>
        <button id="180deg" onClick={() => handleDegreeChange(180)}>180 degrees</button>
        <button id="90deg" onClick={() => handleDegreeChange(90)}>90 degrees</button>
        <button id="62deg" onClick={() => handleDegreeChange(62)}>62 degrees</button>
      </div>
    </div>
  );
}

export default App;
