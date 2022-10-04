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
        <Avatar src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=40" />

        <div className={styles.info}>
          <strong>Francisco de Assis</strong>
          <span>UI Designer</span>
        </div>
      </div>
      <footer>
        <a href="#">Editar Perfil</a>
      </footer>
    </aside>
  );
}
