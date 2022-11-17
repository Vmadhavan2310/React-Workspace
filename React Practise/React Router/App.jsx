import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../src/App";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import NavBar from "./NavBar";
import NoPage from "./NoPage";

export default function Indexes() {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
     

    </>
  );
}
