import { useState } from "react";
import './App.css';

function Header() {
  return(<h1>Les librairies Front</h1>)
}
function Component({ title, link, isSelected}) {
  return(
    <li className={isSelected ? "component blue" : "component"}>
      <a href={link} target="_blank" rel="nonopener noreferrer">{title}</a>
    </li>
  )
}

function Form ({ onChange, onSubmit }) {
  return(
  <form onSubmit={onSubmit} className="flex space-between">
    <input type="text" onChange={onChange}  placeholder="title" name="title" />
    <input type="text" onChange={onChange}  placeholder="link"  name="link" />
    <button type="submit">add</button>
  </form>)
}

function App() {
  const libraries = [
    {title: "React", link: "https://reactjs.org/"}, 
    {title: "Angular", link: "https://angular.io/"}, 
    {title:"Vue", link: "https://vuejs.org/"}, 
    {title:"Bootstrap", link: "https://getbootstrap.com/"}
  ];

  const [input, setInput] = useState(null);
  const [items, setItems] = useState(libraries)
  const handleOnChange = e => setInput({... input, [e.target.name]: e.target.value})
  const handleOnSubmit = e => {
    e.preventDefault()
    // setItems
  }
  return (
    <div className="App">
        <Header />
        <Form onChange={handleOnChange} onSubmit={handleOnSubmit}/>
        <ul className="list">
          {items.map((lib, i) => {
            return(
                    <Component 
                      key={lib.link}
                      title={lib.title}
                      index={i}
                      link={lib.link}
                    />
                )
            })}
        </ul>
    </div>
  );
}

export default App;
