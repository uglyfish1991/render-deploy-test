// import React, { useState } from "react";
// import Modal from 'react-modal'

// Modal.setAppElement('#root')


// const CatModal = ({ cat, index}) => {
//     let subtitle;
//     const [modalIsOpen, setIsOpen] = useState(false)

//     const openModal = () => {
//         setIsOpen(true);
//         console.log(modalIsOpen)
//     }

//     function afterOpenModal() {
//         // references are now sync'd and can be accessed. I don't know what this means it was in the docs? Read this more
//         subtitle.style.color = '#f00';
//     }

//     const closeModal = () => {
//         setIsOpen(false);
//         console.log(modalIsOpen)
//     }

//     return (
//         <Modal>
//             <div className="modalBox">
//                 <button onClick={closeModal}>X</button>
//                 <h3>All About The {cat.breeds[0].name}</h3>
//                 <img src={cat.url} alt="A Cat" />
//                 <p>{cat.breeds[0].description}</p>
//             </div>
//         </Modal>
//     )
// }

// export default CatModal;