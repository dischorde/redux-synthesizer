import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note.js';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.Note = Note;
});
