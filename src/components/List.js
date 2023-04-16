import { useAppContext } from "../context"

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

export default function List() {
  const { state } = useAppContext()
  return (
    <ul className="list-group">
      {state.items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}