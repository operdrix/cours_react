import { useState } from "react";
import "./App.css";

function Header({ title }) {
  return(<h1>{ title }</h1>)
}
function Component({ title, onClick }) {
  
  return(
    <div className="component">
      <p>{title}</p>
      <button onClick={() => onClick(title)}>click me !</button>
    </div>)
}

function App() {
  const libraries = [
    {title: "React", link: "https://reactjs.org/"}, 
    {title: "Angular", link: "https://angular.io/"}, 
    {title:"Vue", link: "https://vuejs.org/"}, 
  ];
  const [title, setTitle] = useState("React")
  const handleOnClick = (value) => setTitle(value) 
  return (
    <div className="App">
      <header className="App-header">
        <Header title={title} />
        <Component title="Learn React"  link="https://reactjs.org/" onClick={handleOnClick} />
        <Component title="Learn Angular" link="https://angular.io/" onClick={handleOnClick}/>
        <Component title="Learn Vue" link="https://vuejs.org/" onClick={handleOnClick}/>
    </header>  
    </div>
  );
}

export default App;