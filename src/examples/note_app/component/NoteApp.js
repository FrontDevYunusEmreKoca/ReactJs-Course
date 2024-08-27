import React, { useEffect, useReducer, useState } from 'react';
import notesReducer from '../reducers/note';
import NoteList from './NoteList';
import AddNewForm from './AddNewForm';

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // localStorage'dan veriyi al ve reducer ile yükle
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    console.log("Stored notes:", storedNotes); // Debug: stored notes

    if (storedNotes) {
      try {
        const notesData = JSON.parse(storedNotes);
        console.log("Parsed notesData:", notesData); // Debug: parsed notesData

        if (Array.isArray(notesData)) {
          dispatch({ type: "POPULATE_NOTES", notes: notesData });
        } else {
          console.error("Stored data is not an array");
          dispatch({ type: "DEFAULT" });
        }
      } catch (error) {
        console.error("JSON parse error: ", error);
        dispatch({ type: "DEFAULT" });
      }
    } else {
      console.log("No stored notes found, initializing default state."); // Debug
      dispatch({ type: "DEFAULT" });
    }
  }, []);

  // notes değiştiğinde localStorage'a yazma
  useEffect(() => {
    console.log("Saving notes to localStorage:", notes); // Debug: notes to be saved
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Not silme
  const removeNote = (title) => {
    dispatch({ type: "REMOVE_NOTE", title });
  };

  return (
    <div className='container p-5'>
      <div className='card mb-3'>
        <div className="card-header">
          Notes
        </div>
      </div>
      <div className='card mb-3'>
        <div className="card-header">
          Add a New Note
        </div>
        {notes && (
          <table className='table table-sm table-striped mb-0'>
            <tbody>
              <NoteList notes={notes} removeNote={removeNote} />
            </tbody>
          </table>
        )}
        <div className="card-body">
            <AddNewForm dispatch={dispatch}/>
        </div>
      </div>
    </div>
  );
};

export default NoteApp;
