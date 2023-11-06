import React, { useState,useEffect } from 'react';
import Mybots from './BotCollection';
import MyArmy from './MyArmy';



function App() {
  
  const [bots, setBots] = useState([])
  const [addedBots, setAddedBots] = useState([])
  useEffect(() =>{
    fetch("http://localhost:8000/bots")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setBots(data)
      })
  },[])

  function onAdd(bot){
    if(!addedBots.find ((addedBot) => addedBot.id === bot.id)){
      setAddedBots([...addedBots,bot])
    }
  }

  
  return (
    <div className="App">
      <MyArmy addedBots={addedBots} />
      < Mybots bots={bots} onAdd = {onAdd} />
      
    </div>
  );
}

export default App;
