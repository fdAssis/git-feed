import styles from "./comment.module.css";
import Delete from "../../assets/delete.svg";
import Like from "../../assets/like.svg";
import { Avatar } from "../Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}
export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likes, setLikes] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLike() {
    setLikes((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.container}>
      <Avatar
        hasBorder={false}
        src="https://images.unsplash.com/photo-1530452540414-c17a65a637fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
      />
      <div className={styles.commentBox}>
        <div className={styles.comment}>
          <header>
            <div className={styles.userInfo}>
              <strong>
                Francisco de Assis <span>(você)</span>
              </strong>
              <time
                title="14 de Setembro às 12:00h"
                dateTime="2022-09-14 12:00"
              >
                Cerca de -1 min
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <img src={Delete} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button className={styles.like} onClick={handleLike}>
            <img src={Like} />
            Aplaudir
            <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
