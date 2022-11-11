import React, { useState} from "react";
import Modal from 'react-modal'

Modal.setAppElement('#root')

//absolutely no idea how to refactor this. Feel like there is something I can do. Do I make a different component to render that manages the modal? Is this handling two things? (Yes - the list of cats and the modal for each cat - but is this okay?)

// I tried to refactor and couldn't - research on Wed in free dev time.

const CatBox = ({ cat, index, }) => {

    const [modalIsOpen, setIsOpen]=useState(false)
    let subtitle;
  
    const openModal = () =>{
      setIsOpen(true);
      console.log(modalIsOpen)
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed. I don't know what this means it was in the docs? Read this more. Made it bright so I could see it - still can't see it
      subtitle.style.color = '#00ff00';
    }
  
    const closeModal = () => {
      setIsOpen(false);
      console.log(modalIsOpen)
    }
    
    return (
      <div className="cat-card" key={index}>
          <img src={cat.url} alt="A Cat"/>
        <div class="cat-content">
          <p>{cat.breeds[0].name}</p>
          <button onClick={openModal}>Learn more?</button>
        </div>
        <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} contentLabel="Example Modal" className="modal">
        <button onClick={closeModal}>X</button>
          <div className="modal-box">
          <h3>All About The {cat.breeds[0].name}</h3>
          <img src={cat.url} alt="A Cat" className="modal-cat-image"/>
          <p>{cat.breeds[0].description}</p>
          </div>
        </Modal>
      </div>
    )
  
  }

  export default CatBox;