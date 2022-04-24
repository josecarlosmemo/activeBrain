import { NavLink, Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const HomeNavigation = () => {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} to="/home">
        ActiveBrain
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/prueba-rapida"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Prueba Rapida
            </NavLink>
          </li>
          <li>
            <Link to="/">Cerrar Sesión</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeNavigation;
