import "./share.css"
import {PermMedia, Room, EmojiEmotions} from "@material-ui/icons"
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpg" alt="" className="shareProfileImg" />
                    <input placeholder="Enter text to Share" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareOptionIcon" />
                            <span className="shareOptionText">Photo / Video</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className="shareOptionIcon" />
                            <span className="shareOptionText">Feel</span>
                        </div>
                        <div className="shareOption">
                            <Room className="shareOptionIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
