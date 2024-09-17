//@ts-ignore
import styles from "./modal-enter.module.scss";
import Modal from "react-modal";
import { Login } from "../login/Login";
import { useState } from "react";

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
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  return (
    <>
      <button className={styles.loginButton} onClick={toggleHandler}>
        Assistant Sign Up/Log In
      </button>

      <Modal
        isOpen={isOpenModal}
        onRequestClose={toggleHandler}
        style={customStyles}
      >
        <Login closeModal={toggleHandler} />
      </Modal>
    </>
  );
};

export { ModalEnter };
