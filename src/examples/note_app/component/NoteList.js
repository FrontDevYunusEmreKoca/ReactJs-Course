import React from 'react';
import NoteTr from './NoteTr';

// `props` yerine destructuring kullanarak `notes` ve `removeNote`'u al
const NoteList = ({ notes, removeNote }) => {
  // `notes`'un bir dizi olduğundan emin olun
  if (!Array.isArray(notes)) {
    console.error("Expected 'notes' to be an array.");
    return null; // veya uygun bir kullanıcı arayüzü
  }

  return (
    
      notes.map((note) => (
        <NoteTr key={note.title} note={note} removeNote={removeNote} />
      ))
   
  );
}

export default NoteList;
