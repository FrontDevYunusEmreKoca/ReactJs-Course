import { type } from '@testing-library/user-event/dist/type'
import React, { act, useEffect, useReducer, useState } from 'react'


const notesReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_NOTES":
      return action.notes;
    case "ADD_NOTE":
      return [
        ...state,
        { title: action.title, body: action.body }
      ];
    case "REMOVE_NOTE":
      return state.filter((note) => note.title !== action.title);
    case "DEFAULT":
      return state;
    default:
      return state;
  }
};


const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // localStorage'dan veriyi al ve reducer ile yükle
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      try {
        const notesData = JSON.parse(storedNotes);
        dispatch({ type: "POPULATE_NOTES", notes: notesData });
      } catch (error) {
        console.error("JSON parse error: ", error);
        // JSON parse hatası varsa, varsayılan boş diziye ayarla
        dispatch({ type: "DEFAULT" });
      }
    } else {
      // localStorage'da veri bulunmazsa varsayılan boş dizi
      dispatch({ type: "DEFAULT" });
    }
  }, []);

  // notes değiştiğinde localStorage'a yazma
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Yeni not ekleme
  const addNote = (e) => {
    e.preventDefault();
    if (title) {
      dispatch({ type: "ADD_NOTE", title, body });
      setTitle("");
      setBody("");
    }
  };

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
              {notes.map((note) => (
                <tr key={note.title}>
                  <td style={{ width: "40%" }}>
                    {note.title}
                  </td>
                  <td>
                    {note.body}
                  </td>
                  <td style={{ width: "4%" }}>
                    <button
                      onClick={() => removeNote(note.title)}
                      className='btn btn-danger btn-sm'>
                      <i className="fa-solid fa-x"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="card-body">
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
        </div>
      </div>
    </div>
  );
};

export default NoteApp;

