import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { Users } from "../../dummyData";


export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={Users.filter((u) => u.id === 11)[0].backgroundProfile}
                alt="profilePhoto"
              />
              <img
                className="profileUserImg"
                src={Users.filter((u) => u.id === 11)[0].profilePicture}
                alt="profilePhoto"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">
                {Users.filter((u) => u.id === 11)[0].username}
              </h4>
              <span className="profileInfoDesc">{Users.filter((u) => u.id === 11)[0].userDesc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed className="profileFeed" />
            <Rightbar profile className="profileRightbar" />
          </div>
        </div>
      </div>
    </>
  );
}
