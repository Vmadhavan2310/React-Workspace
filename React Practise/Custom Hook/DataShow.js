import { useEffect, useState } from "react";
import useCount from "./useCount";
import "./src/styles.css";

export default function DataShow() {
  const { fetchInput, value } = useCount();
  const [show, setShow] = useState({
    status: false,
    name: "Hide Email"
  });
  const [dis, setDisp] = useState(true);

  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetchInput(url);
  }, []);

  const name_Email = value.map((el) => (
    <p key={el.id}>
      Name:{el.name} and Email:{el.email}
    </p>
  ));

  const name = value.map((el) => <p key={el.id}>{el.name}</p>);

  const handleShow = () => {
    setDisp(!dis);
    dis
      ? setShow({ ...show, status: true, name: "show Email" })
      : setShow({ ...show, status: false, name: "Hide Email" });
  };

  return (
    <div className="App">
      <h2>Users Name & Email Id</h2>
      <button onClick={handleShow}>{show.name}</button>
      {dis ? name_Email : name}
    </div>
  );
}
