import "./rightbar.css"
import {Users} from '../../data'
export default function Rightbar({profile}) {
    const HomeRightBar = () => {
        return(<></>)
    }
    const ProfileRightbar = () => {
        return (
          <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Current Location:</span>
                <span className="rightbarInfoValue">Chicago</span>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">From:</span>
                <span className="rightbarInfoValue">Nanded, India</span>
              </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
              {Users.map((friend) => (
                  <div className="rightbarFollowing">
                    <img
                      src={
                        friend.profilePicture}
                      alt=""
                      className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">{friend.username}</span>
                  </div>
              ))}
            </div>
          </>
        );
      };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
            {profile ? <ProfileRightbar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}
