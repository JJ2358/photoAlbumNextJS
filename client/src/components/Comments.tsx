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
            <strong className="text-blue-600">{comment.author}</strong>: {comment.comment}
        </div>
    );
}


const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
    return (
        <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Comments:</h3>
            {comments.map((comment, index) => (
                <CommentItem key={index} comment={comment} />
            ))}
        </div>
    );
}

export default CommentsList;
