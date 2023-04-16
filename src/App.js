import { useRef, useMemo, forwardRef } from "react";
import { useAppContext } from "./context"
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

function Form() {
  const ref = useRef(null)
  const { state, dispatch } = useAppContext()
  const handleOnChange = e => dispatch({ type: "change", payload: { value: e.target.value } })
  const handleOnSubmit = e => {
    e.preventDefault()
    if (isValid) {
      dispatch({ type: "submit", payload: { item: { id: uuid(), content: state.input, done: false } } })
      ref.current.value = null;
    }
  }
  const isValid = useMemo(() => !!state.input, [state.input])

  return (
    <form className="input-group mb-3" onSubmit={handleOnSubmit}>
      <input
        ref={ref}
        type="text"
        className="form-control form-control-lg mx-0"
        placeholder="Add new..."
        style={{ height: "max-content" }}
        onChange={handleOnChange}
      />
      <button type="submit" className="btn btn-info">
        Add
      </button>
    </form>
  )
}

function Select() {
  const { dispatch } = useAppContext()
  const options = ["All", "Completed"]
  const handleOnSelect = option => dispatch({ type: "select", payload: { option } })
  return (
    <div className="d-flex justify-content-end align-items-center my-3 ">
      <select className="select form-select form-control form-control-sm" onChange={handleOnSelect}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}

function Item({ id, content, done }) {
  const { dispatch } = useAppContext()
  const handleOnCheck = e => dispatch({ type: "check", payload: { id, bool: e.target.checked } })
  const isDone = done ? "mx-3 item-done" : "mx-3"
  return (
    <li className="list-group-item">
      <input className="form-check-input" type="checkbox" aria-label="..." checked={done} onChange={handleOnCheck} />
      <span className={isDone}>{content}</span>
    </li>
  );
}

function List() {
  const { state } = useAppContext()
  return (
    <ul className="list-group">
      {state.items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}
function App() {

  return (
    <Container title="Gestionnaire de tâches">
      <Form />
      <Select />
      <List />
    </Container>
  );
}

export default App;
