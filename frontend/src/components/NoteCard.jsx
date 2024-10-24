import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const NoteCard = ({note,onEdit,deleteExistNote}) => {
  return (
    <div className="max-w-sm w-[400px] rounded-3xl h-[200px] grid place-items-center overflow-hidden shadow-lg bg-white text-gray-900">
  <div className="px-6 py-6 w-full h-full">
    <div className="font-bold text-xl mb-2">{note.title}</div>
    <p className="text-gray-700 text-base line-clamp-2">{note.description}</p>
  </div>
  <div className="flex justify-end w-full px-6 gap-4 text-3xl items-center">
    <button className='text-blue-600' onClick={()=>onEdit(note)}><FaEdit /></button>
    <button className='text-red-600' onClick={()=>deleteExistNote(note._id)}><MdDeleteForever /></button>
    </div>
</div>
  )
}
