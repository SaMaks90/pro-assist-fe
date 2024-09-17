//@ts-ignore
import styles from "./header-navigation.module.scss";
import { Link } from "react-router-dom";
import { UserLogo } from "../";
import { useAuth } from "../../hooks";
import { ModalEnter } from "../modal-enter/ModalEnter";

const HeaderNavigation = () => {
  const { token } = useAuth();

  return (
    <section className={styles.headerNavigation}>
      <Link to={"/"} className={styles.logo}>
        ProAssist
      </Link>
      <nav className={styles.navigation}>
        <Link to={"/services"}>Services</Link>
        <Link to={"/our-assistants"}>Our assistants</Link>
        <Link to={"/contacts"}>Contacts</Link>
      </nav>
      {token && <UserLogo />}
      {!token && <ModalEnter />}
    </section>
  );
};

export { HeaderNavigation };
