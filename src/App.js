import { useState, useMemo, useRef, forwardRef } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

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
    </div>
  );
};

const Form = forwardRef(({ onChange, onSubmit }, ref) => {
  return (
    <form className="input-group mb-3" onSubmit={onSubmit}>
      <input ref={ref} type="text" className="form-control form-control-lg mx-0" placeholder="Add new..." style={{ height: "max-content" }} onChange={onChange} />
      <button type="submit" className="btn btn-info">
        Ajouter
      </button>
    </form>
  );
});
const Select = ({ onSelect }) => {
  const options = ["All", "Completed", "Active", "Has due date"];
  const select = (e) => onSelect(e.target.value);
  return (
    <div className="d-flex justify-content-end align-items-center my-3 ">
      <select onChange={select} className="select form-select form-control form-control-sm">
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
const Item = ({ item, onCheck }) => {
  const toggleCheck = (e) => onCheck(item.id, e.target.checked);
  const isDone = item.done ? "mx-3 item-done" : "mx-3";
  return (
    <li className="list-group-item">
      <input id={item.id} className="form-check-input" type="checkbox" aria-label="..." checked={item.done} onChange={toggleCheck} />
      <label htmlFor={item.id}>
        <span className={isDone}>{item.content}</span>
      </label>
    </li>
  );
};
const List = ({ items, onCheck }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item.id} item={item} onCheck={onCheck} />
      ))}
    </ul>
  );
};

function App() {
  const ref = useRef();
  const [input, setInput] = useState(null);
  const [items, setItems] = useState([
    { id: uuid(), content: "pay bills", done: true },
    { id: uuid(), content: "learn React", done: false },
  ]);
  const [all, setAll] = useState(items);
  const handleOnChange = (e) => setInput(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setItems([{ id: uuid(), content: input, done: false }, ...items]);
      setInput(null);
      ref.current.value = null;
    }
  };
  const handleOnCheck = (id, bool) => {
    const updated = items.map((item) => (item.id === id ? { ...item, done: bool } : item));
    setItems(updated);
    setAll(updated);
  };
  const handleOnSelect = (option) => {
    const filtered = all.filter((item) => item.done);
    setItems(option === "Completed" ? filtered : all);
  };
  const isValid = useMemo(() => !!input, [input]);
  return (
    <Container title="Gestionnaire de tâches">
      <Form ref={ref} onChange={handleOnChange} onSubmit={handleOnSubmit} />
      <Select onSelect={handleOnSelect} />
      <List items={items} onCheck={handleOnCheck} />
    </Container>
  );
}

export default App;
