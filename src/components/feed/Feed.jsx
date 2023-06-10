import { useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  const [listPosts, setListPosts] = useState(Posts);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share
          listPosts={listPosts}
          setListPosts={setListPosts}
        />
        {listPosts.map((p) => (
          <Post
            key={p.id}
            post={p}
            listPosts={listPosts}
            setListPosts={setListPosts}
          />
        ))}
      </div>
    </div>
  );
}
