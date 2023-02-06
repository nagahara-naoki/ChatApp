import MessageTimeLine from "@/components/MessageTimeLine";
import SendMessageBox from "@/components/SendMessageBox";
import { useMessage } from "@/hooks/useMessage";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "./channel.module.css";
const ChannelPage = () => {
  const { query } = useRouter();
  const { message, fetchMessages } = useMessage(query.channelId);

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <h2>Title</h2>
      </div>
      <MessageTimeLine messages={message} />
      <SendMessageBox channelId={query.channelId} />
    </div>
  );
};
export default ChannelPage;
