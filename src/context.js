import { createContext, useReducer } from "react"

const Context = createContext()
const { Provider, Consumer } = Context

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
    default:
      return state;
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{}}>{children}</Provider>
}