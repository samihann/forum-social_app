import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import {Posts} from "../../data"

export default function feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((index) => (
                    <Post key={index.id} post={index} />
                ))
                }
            </div>
        </div>
    )
}
