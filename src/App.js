import "./App.css";
import { data } from "./data";
import Accordion from "./Accordion";

function App() {
  console.log(data);
  return (
    <div className="App">
      {data.map((obj, index) => {
        return (
          <>
            <Accordion data={obj} key={index} />
          </>
        );
      })}
    </div>
  );
}

export default App;
