import { Link } from "react-router-dom";
import "./navbar.scss"; // Optional for styling

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navbar justify-around">
       <p className="nav_heading  ">Madelyn Torff</p> 
        <ul className="nav_ul ">
          <li className="hover:animate-bounce text-4xl font-semibold">
            <Link to="/" className="nav_content text-black ">
              Home
            </Link>
          </li>
          <li className="hover:animate-bounce text-black-900 text-4xl font-semibold">
            <Link to="/about" className="nav_content  text-black">
            About
            </Link>
          </li>

          <li className="hover:animate-bounce text-black-900 text-4xl font-semibold">
            <Link to="/contactform" className="nav_content  text-black">
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
