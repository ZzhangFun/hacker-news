import React, { FC, useState } from "react";
import { INewsId } from "../types/INewsId";

interface CommentProps {
  comment: INewsId;
  disable?: boolean;
}

const Comment: FC<CommentProps> = ({ comment, disable }) => {
  const [visible, setVisible] = useState<boolean>(true);
  return disable ? (
    <></>
  ) : (
    <div style={{ border: "2px solid Black" }}>
      <p>{comment.user}</p>
      <p dangerouslySetInnerHTML={{ __html: comment.content }}></p>
      {comment.comments_count !== 0 && (
        <>
          <button onClick={() => setVisible((x) => !x)}>
            {visible ? "↓" : "↑"}
          </button>
          {comment.comments.map((nestedComment) => (
            <Comment
              key={nestedComment.id}
              comment={nestedComment}
              disable={visible}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Comment;
