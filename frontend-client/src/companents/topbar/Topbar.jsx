import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { useHistory } from "react-router-dom";

export default function Topbar(){

    const history = useHistory();

  const homepage = () =>{ 
    history.push('/');
  }

  const profilepage = () =>{ 
    history.push('/profile');
  }


    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo" onClick={homepage}>Forum</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search" className="searchInput"/> 
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink" onClick={homepage}>HomePage</span>
                    <span className="topbarLink" onClick={profilepage}>ProfilePage</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpg" alt="" className="topbarImg" onClick={profilepage} />
            </div>
        </div>
    )
}