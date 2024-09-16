//@ts-ignore
import styles from "./header.module.scss";
import { HeaderNavigation } from "../";

const Header = () => {
  return (
    <header className={styles.headerSection}>
      <HeaderNavigation />
      <section className={styles.headerSectionBottom}>
        <h3>ProAssist</h3>
        <p>
          Find the perfect assistant or become one with ProAssist — a service
          that brings together professionals and businesses for effective
          collaboration
        </p>
        <button onClick={() => console.log("click")}>Get Started</button>
      </section>
    </header>
  );
};

export { Header };
