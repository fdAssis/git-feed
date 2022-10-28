import { useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post({ author, content, publishedAt }) {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState("");

  function handleCreateNewComment() {
    event.preventDefault();

    setCommentList([...commentList, comment]);
    setComment("");
  }

  function handleCommentChange() {
    setComment(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="14 de Setembro às 12:00h" dateTime="2022-09-14 12:00">
          Publicado há 1H
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a className={styles.sharedLink} href="">
                  {line.content}
                </a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Escreva um comentário..."
          value={comment}
          onChange={handleCommentChange}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.comments}>
        {commentList.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
