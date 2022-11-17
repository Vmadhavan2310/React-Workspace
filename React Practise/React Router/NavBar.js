import { Link } from "react-router-dom";
import "../src/styles.css";
const Nav = () => {
  return (
    <nav className="nav-home">
      <Link to="/">Home</Link>
      <Link to="./blog">Blog</Link>
      <Link to="./about">About</Link>
      <Link to="./contact">Contact</Link>
    </nav>
  );
};

export default Nav;
/**Additional Notes**/
<StrictMode>
    <BrowserRouter>
    <Indexes/>
    </BrowserRouter>
  </StrictMode>
