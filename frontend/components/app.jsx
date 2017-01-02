import React from 'react';
import SynthContainer from './synth/synth_container.jsx';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='app'>
        <h1>Synthesizer</h1>
        <SynthContainer />
      </div>
    );
  }

}



export default App;
