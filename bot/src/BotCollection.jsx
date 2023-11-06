import React from "react";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


function Mybots({bots,setBots, onAdd}){

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


    function handleDeleteBot(bot){
        
         prompt('Hey! Do you want to delete?')
        //openModal()
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
            <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
       <h1>Are you sure you want to delete this</h1>
       <button onClick={ handleDeleteBot}>Delter</button>
      </Modal>
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