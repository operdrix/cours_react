import { useAppContext } from "../context"
import { v4 as uuid } from "uuid";
import { useRef, useMemo } from "react";

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
export default Form