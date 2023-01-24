import React from "react";
import "./styles/postItem.css";

function PostItem(props) {
  return (
    <div className="item">
      <div>
        <strong>{props.number}. </strong>
        {props.post.title} <div>{props.post.body}</div>
      </div>
      <div>
        <button onClick={() => props.removePost(props.post)} className="btn">
          delete
        </button>
      </div>
    </div>
  );
}

export default PostItem;
