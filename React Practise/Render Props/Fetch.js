import { useEffect } from "react";

export default function Fetch(props) {
  const { value, fetchInput } = props;
  const url = "https://jsonplaceholder.typicode.com/comments?postId=1";
  useEffect(() => {
    fetchInput(url)
  }, []);

  return (
    <>
      <h2>Users Email</h2>
      {value&&value.map((el) => <p key={el.id}>{el.email}</p>)}
    </>
  );
}
