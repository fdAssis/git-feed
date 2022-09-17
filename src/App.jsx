import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './app.module.css';
export function App() {
  return (
    <>
    <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <Post />
      </div>
    </>
  );
}
