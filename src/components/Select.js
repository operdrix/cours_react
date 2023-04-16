import { useAppContext } from "../context"

export default function Select() {
  const { dispatch } = useAppContext()
  const options = ["All", "Completed"]
  const handleOnSelect = e => dispatch({ type: "select", payload: { option: e.target.value } })
  return (
    <div className="d-flex justify-content-end align-items-center my-3 ">
      <select className="select form-select form-control form-control-sm" onChange={handleOnSelect}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}