import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NoteApp from './examples/note_app/component/NoteApp';
// import AppRouter from './router/AppRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);

                                                                     