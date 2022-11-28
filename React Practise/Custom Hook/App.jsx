import { useEffect } from "react";
import useCount from "../useCount";
import "./styles.css";

export default function App() {
  const { count, Increment } = useCount();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen! {count}</h2>
      <button onClick={Increment}>Increment</button>
    </div>
  );
}
//changes happened
