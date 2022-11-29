import { useState } from "react";
import "./styles.css";

export default function App() {
  /* Credentials */

  const uname = "Vinoth23";
  const pwd = "Vinot@123";

  const [input, setInput] = useState({
    userName: "",
    pwd: "",
    Qualification: "",
    skills: "",

    english: "",
    tamil: "",
    kannada: ""
  });
  const [unameErr, setUnameErr] = useState({});
  const [show, setShow] = useState(false);

  /* Setting the state */
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setInput({ ...input, [e.target.name]: e.target.value });
  };

  /* Validating  */

  let err = {};
  const validation = (e) => {
    e.preventDefault();
    if (input.userName.length === 0) {
      err.userName = "User Name field cannot be blank";
    } else if (input.userName !== uname) {
      err.userName = "User Name is Invalid";
    } else if (input.userName) {
      if (!input.pwd) {
        err.pwd = "Password fild cannot be blank";
      } else if (input.pwd !== pwd) {
        err.pwd = "Password is Invalid";
      }
    }
    setUnameErr(err);
    if (!err.userName && !err.pwd) {
      setShow(!show);
    }
  };
  return (
    <div className="App">
      <form style={{ display: show ? "none" : "block" }}>
        <h1>Hello CodeSandbox</h1>
        <h2>Form Validation</h2>
        <label htmlFor="userName">User Name</label>&nbsp;
        <input
          type="text"
          value={input.userName}
          name="userName"
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{unameErr.userName}</div>
        <br />
        <br />
        <label htmlFor="pwd">Password</label>&nbsp;
        <input
          type="text"
          value={input.pwd}
          name="pwd"
          onChange={handleChange}
        />
        <br />
        <br />
        <div style={{ color: "red" }}>{unameErr.pwd}</div>
        {/* Radio button */}
        <label htmlFor="Qualification">B.E</label>
        <input
          type="radio"
          name="Qualification"
          value="B.E"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="Qualification">B.Tech</label>
        <input
          type="radio"
          name="Qualification"
          value="B.Tech"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="Qualification">B.Com</label>
        <input
          type="radio"
          name="Qualification"
          value="B.Com"
          onChange={handleChange}
        />
        <br />
        <br />
        {/* Drop down */}
        <select name="skills" onChange={handleChange}>
          <option value="null">Select Skills</option>
          <option value="html">HTML</option>
          <option value="js">Java Script</option>
          <option value="react">React</option>
        </select>
        <br />
        {/* checkbox */}
        <label name="english">English</label>
        <input
          type="checkbox"
          name="english"
          onChange={handleChange}
          value="english"
        />
        <br />
        <label name="tamil">Tamil</label>
        <input
          type="checkbox"
          name="tamil"
          onChange={handleChange}
          value="tamil"
        />
        <br />
        <label name="kannada">Kannada</label>
        <input
          type="checkbox"
          name="kannada"
          onChange={handleChange}
          id="kannada"
          value="kannada"
        />
        <br />
        <button onClick={validation} type="submit">
          Submit
        </button>
      </form>
      <div style={{ display: show ? "block" : "none" }}>
        <h2>Form Submitted successfully</h2>
        <button onClick={() => setShow(!show)} type="submit">
          Go Back
        </button>
      </div>
    </div>
  );
}
