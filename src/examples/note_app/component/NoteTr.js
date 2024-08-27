import React from 'react';

const NoteTr = ({ note, removeNote }) => {
  return (
    <tr style={{ padding: '10px' }}>
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
  );
};

export default NoteTr;





