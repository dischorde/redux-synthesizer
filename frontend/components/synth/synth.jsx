import React from 'react';
import { NOTE_NAMES, TONES } from "../../util/tones.js";
import Note from "../../util/note.js";
import NoteKey from "./note_key.jsx";
import $ from 'jquery';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.includes(note)) {
        this.notes[idx].start();
      }
      else {
        this.notes[idx].stop();
      }
    });
  }

  render() {
    this.playNotes();
    const noteKeys = NOTE_NAMES.map((note, idx) => (
     <NoteKey key={idx} note={note} pressed={this.props.notes.includes(note)}/>
   ));

   return (
      <div className="keys">
        {noteKeys}
      </div>
    );
  }
}

export default Synth;
