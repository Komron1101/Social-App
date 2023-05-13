import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

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
                src="assets/myPhoto/backgroundProfile.jpeg"
                alt="profilePhoto"
              />
              <img
                className="profileUserImg"
                src="assets/myPhoto/avatar.jpeg"
                alt="profilePhoto"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Komron</h4>
              <span className="profileInfoDesc">Hello developers!</span>
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
