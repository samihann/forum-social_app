import { MoreVert, ThumbUp } from "@material-ui/icons"
import "./post.css"
import {Users} from "../../data"
import {useState} from "react";

export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [islike, setIslike] = useState(false)
    const user = Users.filter(u=> u.id === post.userId)[0]

    const likeHandler = () => {
        setLike(islike ? like-1 : like+1)
        setIslike(!islike)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp className="likeButton" onClick={likeHandler}/>
                        <span className="postLikeCounter">{like} Likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postComment">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
