import { useChannels } from "@/hooks/useChannels";
import Link from "next/link";
import styles from "./sidebar.module.css";
import SideBarHeader from "./SideBarHeader";

const SideBar = () => {
  const { channel } = useChannels();
  return (
    <div className={styles.body}>
      <SideBarHeader title={"NextJs Header"} />
      {channel.map((chan) => {
        if (chan) {
          return (
            <div key={chan.id}>
              <Link href={`/channels/${chan.id}`}>
                <span className={styles.channelTitle}>{chan.title}</span>
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SideBar;
