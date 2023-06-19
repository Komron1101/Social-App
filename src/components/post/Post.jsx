import "./post.css";
import { MoreVert, DeleteOutlined, EditOutlined } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";


export default function Post({ post, removePost }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt="photo"
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>

          <div className="postTopRight">
            {/* <MoreVert /> */}
            <EditOutlined className="topRightIcon"/>
            <DeleteOutlined onClick={() => removePost(post.id)} className="topRightIcon" />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {
            post.photo && <img className="postImg" src={post.photo} alt="Post Photo" />
          }
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/like.png" alt="Like Icon" className="likeIcon" onClick={likeHandler} />
            <img src="assets/heart.png" alt="Like Icon" className="likeIcon" onClick={likeHandler} />
            {
              like != 0 && <span className="postLikeCounter">{like} people like it</span>
            }
          </div>

          <div className="postBottomRight">
            {
              post.comment && <span className="postCommentText">{post.comment} comments</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
