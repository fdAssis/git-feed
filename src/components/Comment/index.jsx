import styles from "./comment.module.css";
import Delete from "../../assets/delete.svg";
import Like from "../../assets/like.svg";
import { Avatar } from "../Avatar";
export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.container}>
      <Avatar
        hasBorder={false}
        src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=40"
      />
      <div className={styles.commentBox}>
        <div className={styles.comment}>
          <header>
            <div className={styles.userInfo}>
              <strong>
                Jane Lane <span>(você)</span>
              </strong>
              <time
                title="14 de Setembro às 12:00h"
                dateTime="2022-09-14 12:00"
              >
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <img src={Delete} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button className={styles.like}>
            <img src={Like} />
            Curtir
            <span>02</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
