import { useState } from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import { Users } from "../../dummyData";

export default function Share(props) {
  const [input, setInput] = useState('');

  const shareFeed = () => {
    const newFeed = {
      id: Math.random(),
      desc: input,
      userId: 11,
      like: 0,
    }

    // add the todo to the list
    props.setListPosts([newFeed, ...props.listPosts]);

    // clear input box
    setInput("");
  }

  return (
    <div className="share">

      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={Users.filter((u) => u.id === 11)[0].profilePicture}
            alt="photo"
          />
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's in your mind... ?"
            className="shareInput"
          />
        </div>

        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>

          <button onClick={shareFeed} className="shareButton">Share</button>
        </div>
      </div>

    </div>
  );
}
