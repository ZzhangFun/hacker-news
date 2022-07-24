import React, { FC } from "react";
import { INewsId } from "../types/INewsId";
import Comment from "./Comment";

interface CommentsProps {
  comments: INewsId[];
}

const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
