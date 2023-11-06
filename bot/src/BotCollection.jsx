import React from "react";



function Mybots({bots,setBots, onAdd}){

    function handleDeleteBot(bot){
        
        alert('Hey! Do you want to delete?')
        let botID = bot.id
        fetch(`http://localhost:8000/bots/${botID}`,{
            method:'DELETE'
           
        },[])
            .then(response => response.json())
            .then(() => {
                console.log('deleted:',botID)
                let deleted
                deleted = bots.filter((bot) => bot.id !== botID)
                setBots = (deleted, botID)
            })
            
    }
    

    return(
        <div id="section">
            <h3><strong>MY BOTS!!</strong></h3>
            <div id="data">
                {bots.map((bot) =>(
                    <div key={bot.id}>
                        <div className="card">
                        <img src={bot.avatar_url} alt="my avatar" onClick={() => onAdd(bot)}/>
                        </div>
                        <p id="id">Id:{bot.id}</p>
                        <strong id="name" >Name:{bot.name}</strong>
                        <br />
                        <small id="health">Health:{bot.health}</small>
                        <br />
                        <small id="amor">Armor:{bot.armor}</small>
                        <br />
                        <small id="damage">Damage:{bot.damage}</small>
                        <br />
                        <small id='class'>Bot_Class:{bot.bot_class}</small>
                        <br />
                        <small id="DoM">Created_At:{bot.created_at}</small>
                        <br />
                        <button onClick={() => handleDeleteBot(bot)} style={ {backgroundColor: "red" ,padding: "10px 15px", borderRadius:'12px '}  } class="btn btn-danger"><strong>X</strong></button>
                    </div>
                    
                ))}
            </div>

        </div>
    )
}

export default Mybots