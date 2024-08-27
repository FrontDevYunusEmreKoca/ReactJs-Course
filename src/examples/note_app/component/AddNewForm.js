import React, { useState } from 'react'
import NotesContext from '../context/notes-context';
import { useContext } from 'react';


const AddNewForm = () => {

    const {dispatch} =  useContext(NotesContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    
  // Yeni not ekleme
  const addNote = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch({ type: "ADD_NOTE", title, body });
      setTitle("");
      setBody("");
    }
  };


  return (
    <form onSubmit={addNote}>
            <div className="form-group">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className='form-control'
                placeholder='Title'
              />
            </div>
            <div className="form-group">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className='form-control'
                placeholder='Body'
              ></textarea>
            </div>
            <button className='btn btn-primary btn-sm w-100 mt-2'>
              Add Note
            </button>
          </form>
  )
}

export default AddNewForm
