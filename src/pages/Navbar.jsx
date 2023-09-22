import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home page</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
