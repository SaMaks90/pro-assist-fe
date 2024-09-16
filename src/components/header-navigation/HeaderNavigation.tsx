//@ts-ignore
import styles from "./header-navigation.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import { Login } from "../login/Login";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "6px",
    padding: "82px 99px",
  },
};

const HeaderNavigation = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
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
      <button
        className={styles.loginButton}
        onClick={() => setIsOpenModal(true)}
      >
        Assistant Sign Up/Log In
      </button>

      <Modal
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        style={customStyles}
      >
        <Login />
      </Modal>
    </section>
  );
};

export { HeaderNavigation };
