//@ts-ignore
import styles from "./user-logo.module.scss";
import { useState } from "react";
import { AboutUser } from "../";

const UserLogo = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };
  return (
    <section
      className={styles.userLogo}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width="18"
        height="18"
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
      {isVisible && <AboutUser />}
    </section>
  );
};

export { UserLogo };
