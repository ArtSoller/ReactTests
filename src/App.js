import react from 'react';

function App() {
  const [likes, setLikes] = react.useState(5);
  const [value, setValue] = react.useState('Text');

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div className="App">
      <h1>Likes: {likes}</h1>
      <h1>Value: {value}</h1>
      <input 
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      ></input>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
