import React from "react";

function MyArmy({ addedBots, deleteBot }) {

  
  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1>My Army</h1>
      {addedBots.map((bot) => (
        <div className="card" key={bot.id}>
          <img src={bot.avatar_url} alt="my avatar"  onClick={() =>deleteBot(bot)}/>
          <br />
          <small id="name">Name: {bot.name}</small>
          <br />
          <small id="health">Health: {bot.health}</small>
          <br />
          <small id="amor">Armor: {bot.armor}</small>
          <br />
          <small id="damage">Damage: {bot.damage}</small>
          <br />
          <small id='class'>Bot_Class: {bot.bot_class}</small>
          <br />
          <small id="DoM">Created_At: {bot.created_at}</small>
          <br />
        </div>
      ))}
    </div>
  );
}

export default MyArmy;
