import { Avatar } from "../Avatar";
import styles from "./styles.module.css";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=40"
      />
      <div className={styles.profile}>
        <Avatar src="https://images.unsplash.com/photo-1530452540414-c17a65a637fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />

        <div className={styles.info}>
          <strong>Francisco de Assis</strong>
          <span>Dev JavaScript | TypeScript</span>
        </div>
      </div>
      <footer>
        <a href="#">Editar Perfil</a>
      </footer>
    </aside>
  );
}
