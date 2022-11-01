import { ImgHTMLAttributes } from "react";
import styles from "./avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, src, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatar : styles.withoutBorder}
      src={src}
    />
  );
}
