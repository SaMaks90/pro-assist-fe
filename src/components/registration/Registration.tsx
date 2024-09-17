//@ts-ignore
import styles from "./registration.module.scss";
import { RegistrationForm } from "../";

interface IRegistrationProps {
  closeModal: () => void
  modalSwitch: () => void
}

const Registration = ({closeModal, modalSwitch}: IRegistrationProps) => {

  return (
    <div className={styles.registrationFormWrapper}>
      <section className={styles.registrationForm}>
      <section className={styles.registrationFormHeader}>
        <h3>Sign Up </h3>
        <h4>Welcome to ProAssist</h4>
      </section>
      <RegistrationForm />
      <div 
        className={styles.registrationLinkToLogin}
      >
        I already have a profile, <span onClick={modalSwitch}>log in</span>.
      </div>
      </section>
    </div>
  );
};

export { Registration };
