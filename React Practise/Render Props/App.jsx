import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Fetch from "../Fetch";
import Renders from "../Renders";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App
      render={(count, Increment,value, fetchInput) => (
        <Renders count={count} Increment={Increment} />
      )}
    />

    <App
      render={(count, Increment,value, fetchInput) => (
        <Fetch value={value} fetchInput={fetchInput} />
      )}
    />
  </StrictMode>
);


/********App JS file *********/


import { useState } from "react";
import "./styles.css";

export default function App(props) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState([]);

  const Increment = () => {
    setCount((c) => c + 1);
  };

  const fetchInput = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setValue(data));
  };
  return (
    <div className="App">
      {props.render(count, Increment,value, fetchInput)}
      
    </div>
  );
}
