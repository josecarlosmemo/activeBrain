import { Fragment } from "react";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import { useMatch } from "react-router-dom";
import HomeNavigation from "./HomeNavigation";

const Layout = (props) => {
  const isHome = useMatch("/home"); // TODO en algun punto esto debe ser si hay inicio de sesión
  const isPrueba = useMatch("/prueba-rapida");
  const test = isHome || isPrueba;
  // console.log(isHome);

  return (
    <Fragment>
      {!test && <MainNavigation />}
      {test && <HomeNavigation />}

      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
