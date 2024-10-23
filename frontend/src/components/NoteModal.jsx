import { useState } from "react";
export const NoteModal = ({ setShowModal ,addNewNotes}) => {
    // useState for Title and Description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

    // Form Handler
  const noteSaveHandler =async(e)=>{
    e.preventDefault();
    addNewNotes(title,description);
    setTitle("");
    setDescription("");
    setShowModal(false);
    
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-300">
        <div className="relative  my-6 mx-auto max-w-3xl w-[60dvw]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start text-white justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add New Notes</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/* body */}
            <div className="relative p-6 flex-auto">
              <form className="w-full mx-auto">
                <div className="mb-5">
                  <label
                    htmlFor="notetitle"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Note Title
                  </label>
                  <input
                    type="text"
                    id="notetitle"
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Note Title"
                    required
                  />
                </div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  value={description}
                  onChange={e=>setDescription(e.target.value)}
                  rows="4"
                  className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Note Description..."
                ></textarea>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-red-500 hover:bg-red-700 text-white rounded-lg font-bold uppercase px-6 py-3 mr-2 text-md outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Discard
              </button>
              <button
                className="bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-600 font-bold uppercase text-md px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={noteSaveHandler}
              >
                Add Notes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
