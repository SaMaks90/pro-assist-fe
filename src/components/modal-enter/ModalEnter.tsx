//@ts-ignore
import styles from "./modal-enter.module.scss";
import Modal from "react-modal";
import { Login } from "../login/Login";
import { useState } from "react";
import { Registration } from "../registration/Registration";

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
const ModalEnter = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false);
  const [isOpenSignInModal, setIsOpenSignInModal] = useState<boolean>(false);
  const toggleLogin = () => {
    setIsOpenLoginModal((prevState) => !prevState);
  };
  const toggleSignIn = () => {
    setIsOpenSignInModal((prevState) => !prevState);
  };
  return (
    <>
      <button className={styles.loginButton} onClick={toggleSignIn}>
        Sign Up
      </button>
      <button className={styles.loginButton} onClick={toggleLogin}>
        Log In
      </button>
      {isOpenSignInModal ? (
        <Modal
          isOpen={isOpenSignInModal}
          onRequestClose={toggleSignIn}
          style={customStyles}
        >
          <Registration />
        </Modal>
      ) : (
        <></>
      )}
      {isOpenLoginModal ? (
        <Modal
          isOpen={isOpenLoginModal}
          onRequestClose={toggleLogin}
          style={customStyles}
        >
          <Login closeModal={toggleLogin} />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export { ModalEnter };
