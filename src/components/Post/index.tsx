import { useState, FormEvent, ChangeEvent } from "react";
import { PostProps } from "../../App";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post({ author, content, publishedAt }: PostProps) {
  const [commentList, setCommentList] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setCommentList([...commentList, comment]);
    setComment("");
  }

  function handleCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setComment(event.target.value);
  }

  function commentEmpty(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Comentário não pode ser vazio");
  }

  function deleteComment(commentWillBeDeleted: string) {
    const commentsWithoutCommentDeleted = commentList.filter((comment) => {
      return comment !== commentWillBeDeleted;
    });

    setCommentList(commentsWithoutCommentDeleted);
  }

  const commentIsEmpty = comment.length === 0;

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
          required
          onInvalid={commentEmpty}
          onChange={handleCommentChange}
        />
        <footer>
          <button type="submit" disabled={commentIsEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.comments}>
        {commentList.map((comment) => {
          return <Comment content={comment} onDeleteComment={deleteComment} />;
        })}
      </div>
    </article>
  );
}
