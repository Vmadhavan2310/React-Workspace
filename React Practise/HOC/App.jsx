import "./styles.css";
import EnhancedComp from "../EnhancedComp";
import { useEffect } from "react";

function App(props) {
  const { name, count, Increment, asyncs, data } = props;
  const url = "https://jsonplaceholder.typicode.com/comments?postId=1";
  useEffect(() => {
    asyncs(url);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen! {name}</h2>
      <h1>Count {count}</h1>
      <button onClick={Increment}>Increment</button>
      {data && data.map((el, index) => <p key={el.id}>{el.email}</p>)}
    </div>
  );
}

export default EnhancedComp(App);
/* changes made */