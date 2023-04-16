import "./App.css";

const Title = ({ content }) => <h1>{content}</h1>;
const ComponentReact = () => {
  return (
    <>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <br />
    </>
  );
};
const ComponentAngular = () => {
  return (
    <>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Angular
      </a>
      <br />
    </>
  );
};
const ComponentVue = () => {
  return (
    <>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Vue
      </a>
      <br />
    </>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title content="Welcome !" />
        <ComponentReact />
        <ComponentVue />
        <ComponentAngular />
      </header>
    </div>
  );
}

export default App;
