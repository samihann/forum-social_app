import Topbar from "../../companents/topbar/Topbar";
import Sidebar from "../../companents/sidebar/Sidebar";
import Rightbar from "../../companents/rightbar/Rightbar";
import Feed from "../../companents/feed/Feed";
import "./home.css"

export default function Home(){
    return (
        <>
        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar />
        </div>
        
        </>
    )
}