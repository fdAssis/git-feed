import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./app.module.css";

import { api } from "./service/api";
import React, { useEffect, useState } from "react";

interface Author {
  name: string;
  avatar_url: string;
  role: string;
}

interface Content {
  content: string;
  type: "paragraph" | "link";
}

export interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: string;
}

export function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => setPosts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
