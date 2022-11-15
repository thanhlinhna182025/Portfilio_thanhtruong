import Toggle from "../toggle";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="navbar">
      <div className="n-left">
        <div className="n-name">ThanhTruong</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link activeClass="active" to="navbar" spy={true} smooth={true}>
              <li>Home</li>
            </Link>
            <Link activeClass="active" to="service" spy={true} smooth={true}>
              <li>Services</li>
            </Link>
            <Link activeClass="active" to="exprience" spy={true} smooth={true}>
              <li>Exprience</li>
            </Link>
            <Link
              activeClass="active"
              to="testimonial"
              spy={true}
              smooth={true}
            >
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
          <button className="button n-button">Contact us</button>
      </div>
    </div>
  );
};

export default Navbar;
