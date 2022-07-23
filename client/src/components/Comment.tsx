import React, { FC, useState } from "react";
import { INewsId } from "../types/INewsId";
import { CaretDownOutline, CaretUpOutline } from "react-ionicons";

interface CommentProps {
  comment: INewsId;
  disable?: boolean;
}

const Comment: FC<CommentProps> = ({ comment, disable }) => {
  const [visible, setVisible] = useState<boolean>(true);
  return disable ? (
    <></>
  ) : (
    <>
      <div className="comment">
        <h3>{comment.user}</h3>
        <p dangerouslySetInnerHTML={{ __html: comment.content }}></p>
        {comment.comments_count !== 0 && (
          <span className="rotate" onClick={() => setVisible((x) => !x)}>
            {visible ? (
              <CaretDownOutline color={"#0affa1"} />
            ) : (
              <CaretUpOutline color={"#0affa1"} />
            )}
          </span>
        )}
      </div>
      {comment.comments_count !== 0 && (
        <div className={visible ? "child" : "child child-hide"}>
          {comment.comments.map((nestedComment) => (
            <Comment
              key={nestedComment.id}
              comment={nestedComment}
              disable={visible}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Comment;
