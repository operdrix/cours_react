import { useState } from "react";
import "./App.css";

function Header({ title }) {
  return (<h1>{title}</h1>)
}
function Component({ title, index, link, onClick, isSelected }) {

  return (
    <div className={isSelected ? "component green": "component"}>
      <p><a href={link} target="_blank" rel="nonopener noreferrer">{title}</a></p>
      <button onClick={() => onClick(title, index)}>click me !</button>
    </div>)
}

function App() {
  const libraries = [
    { title: "React", link: "https://reactjs.org/" },
    { title: "Angular", link: "https://angular.io/" },
    { title: "Vue", link: "https://vuejs.org/" },
    { title: "Bootstrap", link: "https://getbbotstrap.com/" },
  ];
  const [index, setIndex] = useState(0)
  const [title, setTitle] = useState("React")
  const handleOnClick = (value, index) => {
    setTitle(value)
    setIndex(index)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header title={title} />
        {libraries.map((lib, i) => {
          return (
            <Component
              isSelected={index === i}
              key={lib.link}
              index={i}
              title={lib.title}
              link={lib.link}
              onClick={handleOnClick} />
              )
        })}
      </header>
    </div>
  );
}

export default App;