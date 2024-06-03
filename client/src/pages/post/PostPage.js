import "./PostPage.css"
import Post from "../post/Post"

function PostPage() {
    return (
        <div className="post-grid">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
  }
  
  export default PostPage;