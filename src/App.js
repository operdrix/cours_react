import Form from "./components/Form";
import Select from "./components/Select";
import List from "./components/List";
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
