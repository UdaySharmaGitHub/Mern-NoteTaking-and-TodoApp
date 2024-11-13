import { useEffect, useState } from 'react'
import { MdAdd } from "react-icons/md";
// import { useAuthContext } from '../context/ContextProvider'
import { NoteModal } from '../components/NoteModal';
import { NoteCard } from '../components/NoteCard';
import {Navbar} from '../components/Navbar'
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export const Home = () => {
  // User Context
  // const {user} = useAuthContext()
  // useState for modal window
  const [showModal, setShowModal] = useState(false);

  // useState for notes
  const [notes,setNotes] = useState([]);
// useState to edit the notes;
const [currentNote, setCurrentNote] = useState(null);

//  To add the Filter Functionality
const [query,setQuery] = useState("");
const [fitlerNotes ,setFitlerNotes] = useState([]);


    // // Navigation
    // const navigate = useNavigate();

    //Make a global method to perform  fetch operation
    const fetchNotes = async() =>{
      try{
        const {data} = await axios.get("http://localhost:3000/api/v1/note",{headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }});
        setNotes(data.notes)
        console.log(notes) //  to check that we fetch the data or not
    }catch(error){
      console.error(error);
    }
  }
// UseEffect ot fetch the data
useEffect(() => {
fetchNotes()
}, [])

// useEffect for filtering the notes
useEffect(() => {
  setFitlerNotes(
    notes.filter((note)=>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
    note.description.toLowerCase().includes(query.toLowerCase())
  )  
  )
}, [query,notes])



// Edit Notesl
const onEdit = (note) =>{
  setCurrentNote(note);
  setShowModal(true)
}

  // addNewNotes function hander
  const addNewNotes = async(title,description) =>{
    try{
  console.log(title,description) // check that we get that the data or note
      const response = await axios.post("http://localhost:3000/api/v1/note/add",{title,description},{headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }})
      console.log(response) // check the Axios Response 
      if(response.data.success){
        toast.success("New Note Added Successfully")
        fetchNotes();
          setShowModal(false)
      }
  }catch(error){
      console.log(error);
  }
  }

  // Edit the notes
  const editExistNote = async(id,title,description) =>{
    try{
  console.log(title,description) // check that we get that the data or note
      const response = await axios.put(`http://localhost:3000/api/v1/note/${id}`,{title,description},{headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }})
      console.log(response) // check the Axios Response 
      if(response.data.success){
        setCurrentNote(response.updateNotes);
        toast.success("Note Modified Successfully")
        fetchNotes();
          setShowModal(false)
      }
  }catch(error){
      console.log(error);
  }
  }

  // Delete The notes
  const deleteExistNote = async(id) =>{
    try{
  console.log(id) // check that we get that the data or note
      const response = await axios.delete(`http://localhost:3000/api/v1/note/${id}`,{headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }})
      // console.log(response) // check the Axios Response 
      if(response.data.success){
        toast.success("Note Deleted Successfully")
        fetchNotes();
          setShowModal(false)
      }
  }catch(error){
      console.log(error);
  }
  }

  return (
    <>
        <Navbar setQuery={setQuery} />
    <div className='min-h-[85dvh] py-6 flex justify-start items-center flex-col'>
      <button
        className="bg-blue-500 fixed bottom-10 right-10 text-4xl text-white hover:shadow-white active:bg-pink-600 font-bold uppercase px-4 py-4 rounded-full shadow-none hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <MdAdd />
      </button>
      {/* Show modola Window */}
      {showModal && <NoteModal 
      currentNote ={currentNote}
      setShowModal={setShowModal} addNewNotes={addNewNotes} editExistNote={editExistNote}
      />}

      <div className='grid px-10 mt-10 grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3'>
        {fitlerNotes.length >0?fitlerNotes.map((note,index)=>(
           <div key={index}>
             <NoteCard note = {note} onEdit={onEdit} deleteExistNote = {deleteExistNote}/>
           </div>
          ))
          : <p>No Notes</p>
        }
      </div>
    </div>
    </>
  );
}
