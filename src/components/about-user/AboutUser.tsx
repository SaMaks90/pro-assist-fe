//@ts-ignore
import styles from "./about-user.module.scss";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";

const AboutUser = () => {
  const navigate = useNavigate();
  const { logOut, user } = useAuth();

  const clickExit = () => {
    if (logOut) {
      logOut();
      navigate("/");
    }
  };

  return (
    <section className={styles.wrapperAboutUser}>
      <section className={styles.aboutUser}>
        <span>
          {" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 8C10.4596 8 10.9148 7.90947 11.3394 7.73358C11.764 7.55769 12.1499 7.29988 12.4749 6.97487C12.7999 6.64987 13.0577 6.26403 13.2336 5.83939C13.4095 5.41475 13.5 4.95963 13.5 4.5C13.5 4.04037 13.4095 3.58525 13.2336 3.16061C13.0577 2.73597 12.7999 2.35013 12.4749 2.02513C12.1499 1.70012 11.764 1.44231 11.3394 1.26642C10.9148 1.09053 10.4596 1 10 1C9.07174 1 8.1815 1.36875 7.52513 2.02513C6.86875 2.6815 6.5 3.57174 6.5 4.5C6.5 5.42826 6.86875 6.3185 7.52513 6.97487C8.1815 7.63125 9.07174 8 10 8ZM1 18.4V19H19V18.4C19 16.16 19 15.04 18.564 14.184C18.1805 13.4314 17.5686 12.8195 16.816 12.436C15.96 12 14.84 12 12.6 12H7.4C5.16 12 4.04 12 3.184 12.436C2.43139 12.8195 1.81949 13.4314 1.436 14.184C1 15.04 1 16.16 1 18.4Z"
              stroke="#1E1E1E"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <section>
          <h4>{user?.username}</h4>
          <h5>Business Assistant</h5>
        </section>
      </section>
      <section className={styles.navigationUser}>
        <section>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 8C10.4596 8 10.9148 7.90947 11.3394 7.73358C11.764 7.55769 12.1499 7.29988 12.4749 6.97487C12.7999 6.64987 13.0577 6.26403 13.2336 5.83939C13.4095 5.41475 13.5 4.95963 13.5 4.5C13.5 4.04037 13.4095 3.58525 13.2336 3.16061C13.0577 2.73597 12.7999 2.35013 12.4749 2.02513C12.1499 1.70012 11.764 1.44231 11.3394 1.26642C10.9148 1.09053 10.4596 1 10 1C9.07174 1 8.1815 1.36875 7.52513 2.02513C6.86875 2.6815 6.5 3.57174 6.5 4.5C6.5 5.42826 6.86875 6.3185 7.52513 6.97487C8.1815 7.63125 9.07174 8 10 8ZM1 18.4V19H19V18.4C19 16.16 19 15.04 18.564 14.184C18.1805 13.4314 17.5686 12.8195 16.816 12.436C15.96 12 14.84 12 12.6 12H7.4C5.16 12 4.04 12 3.184 12.436C2.43139 12.8195 1.81949 13.4314 1.436 14.184C1 15.04 1 16.16 1 18.4Z"
              stroke="#1E1E1E"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>Your Profile</span>
        </section>
        <section>
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3752 0.600037H3.2252C2.10682 0.600037 1.2002 1.50666 1.2002 2.62504V10.725C1.2002 11.8434 2.10682 12.75 3.2252 12.75H15.3752C16.4936 12.75 17.4002 11.8434 17.4002 10.725V2.62504C17.4002 1.50666 16.4936 0.600037 15.3752 0.600037Z"
              stroke="black"
            />
            <path
              d="M1.2002 3.63751L8.39502 7.23492C8.67609 7.37538 8.98599 7.44849 9.3002 7.44849C9.6144 7.44849 9.9243 7.37538 10.2054 7.23492L17.4002 3.63751"
              stroke="black"
            />
          </svg>
          <span>Message</span>
        </section>
      </section>
      <section className={styles.exitUser} onClick={clickExit}>
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.405 10.5L0.5 7.5M0.5 7.5L3.405 4.5M0.5 7.5H9.5M3.5 0.5L11.5 0.502C12.604 0.503 13.5 1.398 13.5 2.502V12.497C13.5 13.0274 13.2893 13.5361 12.9142 13.9112C12.5391 14.2863 12.0304 14.497 11.5 14.497L3.5 14.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Exit</span>
      </section>
    </section>
  );
};

export { AboutUser };
