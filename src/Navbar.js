import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Apex Academy Prep</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">Testimonials</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
