import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-xl font-bold">
          Welcome To My Portfolio!
        </NavLink>

<div className="flex gap-6">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/projects">Projects</NavLink>
  <NavLink to="/contact">Contact</NavLink>
  <NavLink to="/services">Services</NavLink>
</div></nav>
    </header>
  );
}

export default Header;