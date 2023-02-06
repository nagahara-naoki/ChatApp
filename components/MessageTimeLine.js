import Message from "./Message";
import styles from "./MessageTimeLine.module.css";

const MessageTimeLine = ({ messages }) => {
  return (
    <div className={styles.body}>
      {messages.map((ms) => {
        return (
          <div key={ms.id}>
            <Message message={ms.body} />
          </div>
        );
      })}
    </div>
  );
};
export default MessageTimeLine;
