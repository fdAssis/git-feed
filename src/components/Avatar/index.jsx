import styles from "./avatar.module.css";
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.withoutBorder}
      src={src}
    />
  );
}
