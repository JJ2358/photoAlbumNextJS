import React from 'react';

interface Comment {
    author: string;
    comment: string;
}

interface CommentsListProps {
    comments: Comment[];
}

const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
    return (
        <div className="border-b border-gray-200 py-2">
            <strong>{comment.author}</strong>: {comment.comment}
        </div>
    );
}

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
    return (
        <div>
            {comments.map((comment, index) => (
                <CommentItem key={index} comment={comment} />
            ))}
        </div>
    );
}

export default CommentsList;
