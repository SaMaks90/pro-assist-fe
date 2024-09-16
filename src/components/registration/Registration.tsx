//@ts-ignore
import styles from "./registration.module.scss";
import { RegistrationForm } from "../";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <h2 className={styles.registrationTitle}>Registration form</h2>
      <RegistrationForm />
      <Link className={styles.registrationLinkToLogin} to={"/login"}>
        I want to move to the login form
      </Link>
    </>
  );
};

export { Registration };
