import React, { useState } from 'react'
import Switch from './components/Switch';

function App() {
  const [on, setOn] = useState(false)

  function handleState() {
   return setOn(!on)
  }

  return (
    <div className="App">
      <Switch on={ on} handleState={handleState} />
    </div>
  );
}

export default App;
