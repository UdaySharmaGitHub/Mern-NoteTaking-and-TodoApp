import { useState } from 'react'
// import { useAuthContext } from '../context/ContextProvider'
import { NoteModal } from '../components/NoteModal';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Home = () => {
  // User Context
  // const {user} = useAuthContext()
  // useState for modal window
  const [showModal, setShowModal] = useState(false);

    // Navigation
    const navigate = useNavigate();

  const addNewNotes = async(title,description) =>{
    try{
  console.log(title,description) // check that we get that the data or note
      const response = await axios.post("http://localhost:3000/api/v1/note/add",{title,description},{headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }})
      console.log(response) // check the Axios Response 
      if(response.data.success){
          navigate('/');
      }
  }catch(error){
      console.log(error);
  }
  }

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <button
        className="bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {/* Show modola Window */}
      {showModal && <NoteModal setShowModal={setShowModal} addNewNotes={addNewNotes}/>}
    </div>
  );
}
