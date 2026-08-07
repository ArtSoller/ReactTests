import React from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import '../src/styles/App.css';
import PostItem from './components/PostItem';

function App() {
  const [value, setValue] = React.useState('Text');

  return (
    <div className="App">
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>

    </div>
  );
}

export default App;
