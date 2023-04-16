import { useState } from "react";
import {v4 as uuid} from "uuid"
import './App.css';

const Container = ({ children, title }) => {
  return (
    <div className="container py-3">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card" id="list1" style={{ borderRadius: ".15rem" }}>
            <div className="card-body py-4 px-4 px-md-5">
              <h1 className="text-info mb-3">{title}</h1>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>)
}

const Form = ({ onChange, onSubmit }) => {
  return (
    <form className="input-group mb-3" onSubmit={onSubmit}>
      <input type="text" className="form-control form-control-lg mx-0" placeholder="Add new..." style={{ height: "max-content" }} onChange={onChange} />
      <button type="submit" className="btn btn-info">Ajouter</button>
    </form>
  )
}
const Select = () => {
  return (
    <div className="d-flex justify-content-end align-items-center my-3 ">
      <select className="select form-select form-control form-control-sm">
        <option value="1">All</option>
        <option value="2">Completed</option>
        <option value="3">Active</option>
        <option value="4">Has due date</option>
      </select>
    </div>
  )
}
const Item = ({ item }) => {
  return (
    <li className="list-group-item">
      <input className="form-check-input" type="checkbox" aria-label="..." />
      <span className="mx-3">{item.content}</span>
    </li>
  )
}
const List = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map(item => <Item key={item.id} item={item} />)}
    </ul>
  )
}

function App() {
  const [input, setInput] = useState(null)
  const [items, setItems] = useState([{ id: 1, content: "pay bills", done: false }, { id: 2, content: "learn React", done: false }])

  const handleOnChange = e => setInput(e.target.value)
  const handleOnSubmit = e => {
    e.preventDefault()
    if (!input) return
    setItems([
      {
        id: uuid(),
        content: input,
        done: false
      }, ...items
    ])
    setInput(null)

  }
  return (
    <Container title="Gestionnaire de tâches">
      <Form onChange={handleOnChange} onSubmit={handleOnSubmit} />
      <Select />
      <List items={items} />
    </Container>);
}

export default App;
