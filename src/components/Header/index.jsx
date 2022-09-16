import styles from "./styles.module.css";

import ipfsLogoPng from '../../assets/ipfs-logo-png.png';
import ipfsLogo from '../../assets/ipfs-logo.svg';
export function Header(){
  return (
    <header className={styles.header}>
      <img src={ipfsLogoPng} alt="IPFS image logo" srcset="" />
      <strong>
        IPFS-FEED
      </strong>
    </header>
  )
}