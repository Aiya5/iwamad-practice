import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";
import logo from "../assets/logo.svg";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

function Header({ title, subtitle }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="site-header">
      <img src={logo} alt="" width={32} height={32} />
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <p className="likes-count">❤️ {likes}</p>
      <nav>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/skills">Skills</NavLink>
       <NavLink to="/contact">Contact</NavLink>
       <NavLink to="/register">Register</NavLink>
      </nav>  
    </header>
  );
}

export default Header;