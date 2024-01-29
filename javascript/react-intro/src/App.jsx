import "./App.css";
import Greeting from "./Greeting";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Greeting foo="bar" name="Sam" age={100} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
        aliquid? Inventore sunt ullam magnam sapiente accusantium quod tenetur
        molestias, harum voluptatum nihil eius dolores vel nostrum error
        repellat, exercitationem voluptate.
      </p>
      <Greeting abc="123"/>
    </>
  );
}

export default App;
