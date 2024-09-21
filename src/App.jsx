import React from 'react';
import { useState } from 'react'
import background from './components/background/background';
const App = () => {
    let heroData = [
        {text1: "Dive into" ,text2: "what you love"},
        {text1: "indulge",text2: "your passion"},
        {text1: "Give in to",text2: "Your passion"},

    ]
    const [heroCount, setHeroCount] = useState (2);
    const [ playStatus, setPlayStatus] = useState (false)





  return (
    <div>
        <background playStatus = {playStatus} heroCount ={heroCount}/>
    </div>
  )
};
export default App
