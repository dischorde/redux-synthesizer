import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // ReactDOM.render(<App />, root);
  window.Note = Note;
});
