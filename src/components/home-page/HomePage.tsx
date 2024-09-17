//@ts-ignore
import styles from "./home-page.module.scss";
import { OurAssistants } from "../";

const HomePage = () => {
  return (
    <section className={styles.homePageWrapper}>
      <h2>Hello its Home Page</h2>
      <OurAssistants />
    </section>
  );
};

export { HomePage };
