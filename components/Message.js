import { AppContext } from "@/pages/_app";
import { useContext } from "react";
import styles from "./Message.module.css";
const Message = ({ message }) => {
  const { me } = useContext(AppContext);
  console.log(me);
  return (
    <>
      <li className={styles.body}>
        <div className={styles.left}>
          <div className={styles["profile-image"]}>
            <img
              src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSrWx5qzzn0tULlnN902A3zDlgXUUspCbaBjzceQxs-n1ubJ9cGWqbn2ft2LrKKjnZuNPYH0hJXqoNr0_YN2nE"
              alt=""
            />
          </div>
        </div>
        <div>
          <div className={styles.header}>
            <span>{new Date().toDateString()}</span>
          </div>
          {message}
        </div>
      </li>
    </>
  );
};

export default Message;
