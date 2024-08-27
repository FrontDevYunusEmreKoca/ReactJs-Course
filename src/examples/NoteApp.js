import React, { useEffect, useState } from 'react'

const NoteApp = () => {
  const [notes,setNotes] = useState([]);
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");

  // useEffect(() => {
  //   const notesData = JSON.parse(localStorage.getItem('notes'))
  //   if(notesData) {
  //     setNotes(notesData)
  //   }
  // },[])

  // useEffect(() => { 
  //   localStorage.setItem("notes", JSON.stringify(notes))
  // }, [notes])
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      try {
        const notesData = JSON.parse(storedNotes);
        setNotes(notesData);
      } catch (error) {
        console.error("JSON parse error: ", error);
        // Eğer JSON parse hatası varsa, notes'u varsayılan boş diziye ayarla
        setNotes([]);
      }
    } else {
      // Eğer veriyi bulamazsa, varsayılan boş diziye ayarla
      setNotes([]);
    }
  }, []);
    // notes değiştiğinde localStorage'a yazma
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
  

   const addNote = (e) =>{
    e.preventDefault();
    if(title){
      setNotes(
        [
          ...notes,
          {title,body}
        ]
      )
      setTitle("")
      setBody("")
    }
   } 

   const  removeNote = (title) => {
      setNotes(notes.filter((note) => note.title !==title ))
   }

  return(
    <div className='container p-5'>
        <div className='card mb-3'>
            <div className="card-header">
               Notes
            </div>
        </div>
        <div className='card mb-3'>
            <div className="card-header">
               Add a New Notes
            </div>
            {
              notes && (
                  <table className='table table-sm table-striped mb-0'>
                    <tbody>
                        {
                          notes.map((note) => (
                            <tr key={note.title}>
                              <td   style={{width: "40%"}}>
                                {note.title}
                              </td>
                              <td >
                                {note.body}
                              </td>
                              <td style={{width: "4%"}}>
                                <button onClick={() => removeNote(note.title)} className='btn btn-danger btn-sm '>
                                <i className="fa-solid fa-x"></i>
                                </button>
                              </td>
                            </tr>
                          ))
                        }
                    </tbody>
                  </table>
              )
            }
            <div className="card-body">
              <form onSubmit={addNote}>
                <div className="form-group">
                   <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='form-control'/>
                </div>
                <div className="form-group">
                   <textarea value={body} onChange={(e) => setBody(e.target.value)} type="text" className='form-control'></textarea>
                </div>
                <button className='btn btn-primary btn-sm w-100 mt-2'>Add  Note</button>
              </form>
            </div>
        </div>
    </div>
    
  )
}

export default NoteApp;

