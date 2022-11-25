import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const initialValues = {
    userId: "",
    title: "",
    body: ""
  };

  const onSubmit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", formik.values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues,
    onSubmit
  });
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input
          type="text"
          name="userId"
          placeholder="user Id"
          value={formik.values.userId}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="title"
          placeholder="tile"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="body"
          placeholder="body"
          value={formik.values.body}
          onChange={formik.handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit the Details</button>
      </form>
    </div>
  );
}
