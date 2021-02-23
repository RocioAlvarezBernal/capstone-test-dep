import React, { useState } from 'react'
// import './App.css'
import Modal from 'react-modal'
Modal.setAppElement('#root')

// onclick(){window.location = "/Home"};

function TranModal () {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className='App'>

      <button id="logoutbtn"onClick={() => setModalIsOpen(true)}>Submit</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        
        style={{
          overlay: {
            backgroundColor: "(15, 87, 134)",
            width:'300px', 
            height:"300px"
          },
          content: {
            color: 'black'    
          }

        }}
      
      >
        <h2>Transaction</h2>
        <div>Click below to continue transaction.</div>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Cancel</button>
          <button onClick= {() => window.location = "/Home"}>Submit</button> 
        </div>
      </Modal>
    </div>
  )
}

export default TranModal