import React from 'react';
import Counter from './components/Counter';

function App() {
  const [value, setValue] = React.useState('Text');

  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
