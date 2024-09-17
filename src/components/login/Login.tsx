//@ts-ignore
import styles from "./login.module.scss";
import { LoginForm } from "../";

interface ILoginProps {
  closeModal: () => void;
}

const Login = ({ closeModal }: ILoginProps) => {
  return (
    <section className={styles.loginForm}>
      <section className={styles.loginFormHeader}>
        <h3 className={styles.loginTitle}>Login</h3>
        <h4 className={styles.loginGreeting}>{`Welcome to 
        ProAssist`}</h4>
      </section>
      <LoginForm closeModal={closeModal} />
    </section>
  );
};

export { Login };
