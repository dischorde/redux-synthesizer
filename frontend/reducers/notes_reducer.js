import { KEY_PRESSED, KEY_RELEASED } from "../actions/notes_actions.js";
import { NOTE_NAMES } from "../util/tones.js";


const notesReducer = (state = [], action) => {
  Object.freeze(state);
  const idx = state.indexOf(action.key);
  const isValid = NOTE_NAMES.includes(action.key);

  switch(action.type) {
    case KEY_PRESSED:
      if (isValid && state.includes(action.key)) {
        return [...state, action.key];
      }
      else {
        return state;
      }
    case KEY_RELEASED:
      if (isValid && idx !== -1) {
        let newState = [...state];
        return newState.splice(idx, 1);
      }
      else {
        return state;
      }
    default:
      return state;
  }
};

export default notesReducer;
