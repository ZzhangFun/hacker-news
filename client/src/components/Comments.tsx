import React, { FC } from "react";
import { INewsId } from "../types/INewsId";
import Comment from "./Comment";

interface CommentsProps {
  comments: INewsId[];
}

const Comments: FC<CommentsProps> = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default Comments;
