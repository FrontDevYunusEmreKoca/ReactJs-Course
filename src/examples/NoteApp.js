
import React, { useEffect, useState } from 'react'

const NoteApp = () => {
  const [notes , setNotes] = useState([])
  const [title , setTitle] = useState("")
  const [body , setBody] = useState("")

  useEffect(() =>{
    const notesData =  JSON.parse(localStorage.getItem("notes"));
    if(notesData) {
      setNotes(notesData)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("notes" , JSON.stringify(notes))
  }, [notes])

  const addNote = (e) => {
    e.preventDefault();
    if (title){
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

  const RemoveNote =(title) => {
   setNotes(notes.filter((note)=> note.title !==title))
  }
 
  return (
    <div  className='container p-5'>
      <div className="card mb-3">
        <div class="card-header">Notes</div>
        {
          notes && (
            <table className='table table-sm table-striped mb-0'>
                <tbody>
                    {
                      notes.map((note) => (
                        <tr className='mx-3' key={note.title}>
                          <td style={{width: "40%"}}>{note.title} </td>
                          <td >{note.body}</td>
                          <td  style={{width: "4%"}}>
                            <button  onClick={()=> RemoveNote(note.title)} className='btn btn-sm btn-danger'><i className='far fa-times'></i></button>
                          </td>
                        </tr>
                      ))
                    }
                </tbody>
            </table>
          )
        }
      </div>
      <div className="card mb-3">
        <div className="card-header">Add a New Note</div>
        <div className="card-body">
            <form onSubmit={addNote}>
                <div class="form-group">
                    <input value={title} onChange={(e) => setTitle(e.target.value)} className='form-control'/>
                </div>
                <div class="form-group">
                  <textarea name="" value={body} onChange={(e) => setBody(e.target.value)} className='form-control' id=""></textarea>
                </div>
                <button className='btn btn-primary btn-block  my-3 w-100 '>Add Notes</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default NoteApp;
