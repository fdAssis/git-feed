import styles from "./styles.module.css";

import gitHubLogo from "../../assets/github.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={gitHubLogo} alt="github image logo" />
      <strong>GIT-FEED</strong>
    </header>
  );
}
