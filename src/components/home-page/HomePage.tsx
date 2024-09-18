//@ts-ignore
import styles from "./home-page.module.scss";
import { OurAssistants } from "../";
import OurAdvantages from "./our-advantages/OurAdvantages";

const HomePage = () => {
  return (
    <section className={styles.homePageWrapper}>
      <OurAdvantages/>
      <h2>Hello its Home Page</h2>
      <OurAssistants />
    </section>
  );
};

export { HomePage };
