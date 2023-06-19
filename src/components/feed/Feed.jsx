import { useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  const [posts, setPosts] = useState(Posts);

  const addPost = post => {
    if (!post.desc || /^\s*$/.test(post.desc)) {
      return;
    }

    const newPosts = [post, ...posts];

    setPosts(newPosts);
  };

  const removePost = id => {
    const removeArr = [...posts].filter(todo => todo.id !== id); //QUESTION: Why [...posts] ?

    setPosts(removeArr);
}

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share
          onSubmit={addPost}
        />
        {posts.map((p) => (
          <Post
            key={p.id}
            post={p}
            removePost={removePost}
          />
        ))}
      </div>
    </div>
  );
}
