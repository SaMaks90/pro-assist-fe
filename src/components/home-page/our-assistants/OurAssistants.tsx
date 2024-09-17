//@ts-ignore
import styles from "./our-assistants.module.scss";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

const ourAssistants = [
  {
    id: 1,
    avatar: "",
    title: "Financial Support",
    username: "Oksana Zavada",
    rating: "4",
    reviews: "10",
    createdOn: new Date(),
    online: new Date(),
  },
  {
    id: 2,
    avatar: "",
    title: "Financial Support",
    username: "Test Testing",
    rating: "3.4",
    reviews: "2",
    createdOn: new Date(),
    online: new Date(),
  },
  {
    id: 3,
    avatar: "",
    title: "Research and analytics",
    username: "David Sirko",
    rating: "2",
    reviews: "1",
    createdOn: new Date(),
    online: new Date(),
  },
  {
    id: 4,
    avatar: "",
    title: "Marketing and PR",
    username: "Serhij Konovalenko",
    rating: "4.6",
    reviews: "33",
    createdOn: new Date(),
    online: new Date(),
  },
];

const OurAssistants = () => {
  return (
    <section className={styles.ourAssistantsBlock}>
      <h4 className={styles.ourAssistantsTitle}>Our assistants</h4>
      <section className={styles.ourAssistantsList}>
        {ourAssistants.map((elem) => (
          <section key={elem.id} className={styles.ourAssistantBlock}>
            <div className={styles.ourAssistantAvatar}></div>
            <section className={styles.ourAssistantBlockBottom}>
              <section className={styles.ourAssistantAbout}>
                <h5>{elem.username}</h5>
                <h6>{elem.title}</h6>
                <section>
                  <span>Rating {elem.rating}/5</span>
                  <span>{elem.reviews} reviews</span>
                  <span>Registered ago</span>
                  <span>Was online ago</span>
                </section>
              </section>
              <Link className={styles.button} to={"/"}>
                Get in Touch
              </Link>
              <Link
                className={clsx(styles.button, styles.buttonLight)}
                to={"/"}
              >
                View profile
              </Link>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export { OurAssistants };
