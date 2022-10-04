import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.profile}>
          <Avatar src="https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=40" />
          <div className={styles.authorInfo}>
            <strong>Jane Cooper</strong>
            <span>Dev Front-End</span>
          </div>
        </div>
        <time title="14 de Setembro às 12:00h" dateTime="2022-09-14 12:00">
          Públicado há 1H
        </time>
      </header>

      <div className={styles.content}>
        <div>
          <p>Fala dev ✨</p>
          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>
          <p>
            <a className={styles.sharedLink} href="">
              jane.design/doctorcare
            </a>
          </p>
        </div>

        <div className={styles.hashtags}>
          <p>
            <a href="">#novoprojeto</a>
          </p>
          <p>
            <a href="">#nlw</a>
          </p>
          <p>
            <a href="">#rocketseat</a>
          </p>
        </div>
      </div>

      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.comments}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
