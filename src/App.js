import { useEffect, useState } from "react";
import './App.css';

const Result = ({ result }) => <h1 className="result">{ result }</h1>

const Counter = ({ count, onClick}) => {
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => onClick(count => count + 1)}>click</button>
      <button onClick={() => onClick(() => count = 0)}>reset</button>
    </>
  )
}

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => setResult(count1 + count2), [count1, count2])

  return (
    <div className="App">
      <header className="App-header">
        <Result result={result} />
        <Counter count={count1} onClick={setCount1} />
        <Counter count={count2} onClick={setCount2} />
      </header>
    </div>
  );
}

export default App;
