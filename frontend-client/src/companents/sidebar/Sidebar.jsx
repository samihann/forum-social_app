import "./sidebar.css"
import {
    RssFeed,
    Chat,
    Group,
  } from "@material-ui/icons";
import { Users } from "../../data";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <RssFeed className="sidebarListItemIcon"/>
                    <span className="sidebarListItemText">
                    Feed
                    </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarListItemIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>

                </ul>
                <hr className="sidebarHr" />
                <button className="sidebarButton">Friend List</button>
                
                <ul className="sidebarFriendList">
                    {Users.map(index => (
                        <li className="sidebarFriend">
                        <img src={index.profilePicture} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">{index.username}</span>
                    </li>

                    ))
                    }

                </ul>
            </div>
        </div>
    )
}
