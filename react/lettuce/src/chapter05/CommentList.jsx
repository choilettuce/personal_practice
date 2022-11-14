import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "lettuce",
        comment: "안녕하세요, 상추입니다.",
    },
    {
        name: "김채원",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "카즈하",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;