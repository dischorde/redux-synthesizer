import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note.js';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // ReactDOM.render(<App />, root);
  const store = configureStore();
  window.Note = Note;
  window.store = store;
});
