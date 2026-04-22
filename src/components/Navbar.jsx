import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Bristol plumbing logo" />
        </a>
      </div>

      <nav className="nav-links">
        <a href="#contact">Request Quote</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

export default Navbar;