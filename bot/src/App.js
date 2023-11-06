import React, { useState,useEffect } from 'react';
import Mybots from './BotCollection';



function App() {
  
  const [bots, setBots] = useState([])
  useEffect(() =>{
    fetch("http://localhost:8000/bots")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setBots(data)
      })
  },[])

 
  return (
    <div className="App">
      < Mybots bots={bots} />
    </div>
  );
}

export default App;
