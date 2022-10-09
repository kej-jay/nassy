import React, { useState } from 'react'

import WebSocketConnect from './components/WebSocketConnect'
import PolarArea from './components/IrisGraph'
import CodeLinesGraph from './components/CodeLinesGraph'
import './App.css'

const App = () => {
  const [leftPupilSize, setLeftPupilSize] = useState(0);
  const [rightPupilSize, setRightPupilSize] = useState(0);
  const pupilAdjust = (left, right) => {
      setLeftPupilSize(left);
      setRightPupilSize(right);
  }  

  return (
    <div>
      <WebSocketConnect updatePupilSizes={pupilAdjust}/>
      <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <PolarArea identifier="left" value={leftPupilSize}/>
            <PolarArea identifier="right" value={rightPupilSize}/>
      </div>    
      <CodeLinesGraph />
    </div>
  )
}

export default App
