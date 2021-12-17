import React from 'react'
import "./profile.css"
import Topbar from "../../companents/topbar/Topbar";
import Sidebar from "../../companents/sidebar/Sidebar";
import Rightbar from "../../companents/rightbar/Rightbar";
import Feed from "../../companents/feed/Feed";

export default function Profile() {
    return (
        <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileTop">
                <div className="profileCover">
                    <img src="/assets/cover/1.jpg" alt="" className="profileCoverImg" />
                    <img src="/assets/person/1.jpg" alt="" className="profileImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Samihan Nandedkar</h4>
                    <span className="profileInfoDesc">I am a Web and Software Developer with over a year of industry experience in React, Node.js and Express.</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile />
            </div>
        
        </div>
        
        </div>
        
        </>
    )
}
