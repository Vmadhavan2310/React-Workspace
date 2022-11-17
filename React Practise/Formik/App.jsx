import { useFormik } from "formik";
import "./styles.css";
import * as yup from "yup";
export default function App() {
  const initialValues = {
    fname: "",
    lname: "",
    mail: ""
  };

  const onSubmit = (values) => {
    console.log("form data", values);
  };

  const validate = (values) => {
    let err = {};
    if (!values.fname) {
      err.fname = "Required";
    }
    if (!values.lname) {
      err.lname = "Required";
    }
    if (!values.mail) {
      err.mail = "Required";
    }
    return err;
  };

  const validationSchema = yup.object({
    fname: yup.string().required("Required").length(4, "Length must be 4"),
    lname: yup.string().required("Required"),
    mail: yup.string().required("Required").email("Invalid Format")
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit} className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <label htmlFor="fname">First Name</label> &nbsp;
        <input
          type="text"
          name="fname"
          onChange={formik.handleChange}
          value={formik.values.fname}
        />
        <br />
        {formik.errors.fname && (
          <div className="err">{formik.errors.fname}</div>
        )}
        <br />
        <label htmlFor="lname">Last Name</label> &nbsp;
        <input
          type="text"
          name="lname"
          onChange={formik.handleChange}
          value={formik.values.lname}
        />
        <br />
        {formik.errors.lname && (
          <div className="err">{formik.errors.lname}</div>
        )}
        <br />
        <label htmlFor="mail">Email ID</label> &nbsp;
        <input
          type="text"
          name="mail"
          onChange={formik.handleChange}
          value={formik.values.mail}
          style={{ position: "relative", left: "10px" }}
        />
        <br />
        {formik.errors.mail && <div className="err">{formik.errors.mail}</div>}
        <br />
        <button style={{ position: "relative", left: "40px" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
