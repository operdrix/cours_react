import { useState, useMemo, useRef, forwardRef, useReducer } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";

const initialState = {
  items: [
    { id: 1, content: "pay bills", done: true },
    { id: 2, content: "learn React", done: false },
  ],
  all: [
    { id: 1, content: "pay bills", done: true },
    { id: 2, content: "learn React", done: false },
  ],
  input: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "submit":
      return {
        ...state,
        items: [...state.items, action.payload.item],
        all: [...state.all, action.payload.item],
        input: null,
      };
    case "change":
      return {
        ...state,
        input: action.payload.value,
      };
    case "check":
      const updated = state.items.map((item) => (item.id === action.payload.id ? { ...item, done: action.payload.bool } : item));
      return {
        ...state,
        items: updated,
        all: updated,
      };
    case "select":
      const filtered = state.items.filter((item) => item.done);
      return {
        ...state,
        items: action.payload.option === "Completed" ? filtered : state.all,
      };
  }
}

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
  const options = ["All", "Completed"];
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef();
  const [items, setItems] = useState([
    { id: uuid(), content: "pay bills", done: true },
    { id: uuid(), content: "learn React", done: false },
  ]);
  const [all, setAll] = useState(items);

  const handleOnChange = (e) => dispatch({ type: "change", payload: { value: e.target.value } });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch({ type: "submit", payload: { item: { id: uuid(), content: state.input, done: false } } });
      ref.current.value = null;
    }
  };
  const handleOnCheck = (id, bool) => {
    dispatch({ type: "check", payload: { id, bool } });
  };
  const handleOnSelect = (option) => {
    dispatch({ type: "select", payload: { option } });
  };
  const isValid = useMemo(() => !!state.input, [state.input]);
  return (
    <Container title="Gestionnaire de tâches">
      <Form ref={ref} onChange={handleOnChange} onSubmit={handleOnSubmit} />
      <Select onSelect={handleOnSelect} />
      <List items={state.items} onCheck={handleOnCheck} />
    </Container>
  );
}

export default App;
