import React from "react";



function Mybots({bots, onAdd}){
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
                        <h5 id="name" >Name:{bot.name}</h5>
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
                        <button style={ {backgroundColor: "red" ,padding: "10px 15px", borderRadius:'12px '}  } class="btn btn-danger"><strong>X</strong></button>
                    </div>
                    
                ))}
            </div>

        </div>
    )
}

export default Mybots