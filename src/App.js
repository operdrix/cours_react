import "./App.css";

const Title = ({ content }) => <h1>{content}</h1>;
const ComponentUnique = ({ link, title }) => {
  return (
    <>
      <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Lear {title}
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
        <ComponentUnique link="https://reactjs.org" title="React" />
        <ComponentUnique link="https://angularjs.org" title="Angular" />
        <ComponentUnique link="https://vuejs.org" title="Vue" />
      </header>
    </div>
  );
}

export default App;
