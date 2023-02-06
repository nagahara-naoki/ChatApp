import styles from "./SideBarHeader.module.css";
const SideBarHeader = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};
export default SideBarHeader;
