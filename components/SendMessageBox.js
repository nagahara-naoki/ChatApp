import { useMessage } from "@/hooks/useMessage";
import { useState } from "react";
import styles from "./SendMessageBox.module.css";
const SendMessageBox = ({ channelId }) => {
  const [message, setMessage] = useState("");
  const { postMessage } = useMessage(channelId);
  const onClickSend = (e) => {
    const requestMessage = {
      id: "",
      body: message,
      channelId: "",
      createdAt: new Date(),
    };
    postMessage(requestMessage);
    setMessage("");
  };
  return (
    <div className={styles.body}>
      <div className={styles.header}>header</div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles["message-box"]}
      ></textarea>
      <button onClick={onClickSend} className={styles.button}>
        Send
      </button>
    </div>
  );
};
export default SendMessageBox;
