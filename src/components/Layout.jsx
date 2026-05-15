import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import styles from "./Layout.module.css";

function Layout() {
  const { pathname } = useLocation();
  const variant = pathname === "/" ? "home" : "default";

  return (
    <div className={styles.layout}>
      <Header variant={variant} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
