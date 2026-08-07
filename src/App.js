import React from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';

function App() {
  const [value, setValue] = React.useState('Text');

  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;
