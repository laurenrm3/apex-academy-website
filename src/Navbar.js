import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <nav className="navbar">
      <h1 onClick={handleClick}>Apex Academy Prep</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
