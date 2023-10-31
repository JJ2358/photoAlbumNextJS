import React from 'react';

/**
 * Represents a comment on a photo.
 * 
 * @interface
 * @property {string} author - The author or user who wrote the comment.
 * @property {string} comment - The text of the comment.
 */
interface Comment {
    author: string;
    comment: string;
}

/**
 * Props for the CommentsList component.
 * 
 * @interface
 * @property {Comment[]} comments - An array of comments to display.
 */
interface CommentsListProps {
    comments: Comment[];
}

/**
 * Represents a single comment item.
 * 
 * @component
 * @param {Comment} comment - The comment data to display.
 * @returns {ReactElement} The rendered comment item.
 */
const CommentItem: React.FC<{ comment: Comment }> = ({ comment }) => {
    return (
        <div className="border-b border-gray-200 py-2">
            <strong className="text-blue-600">{comment.author}</strong>: {comment.comment}
        </div>
    );
}

/**
 * Represents a list of comments.
 * 
 * @component
 * @param {CommentsListProps} props - The props for the component.
 * @returns {ReactElement} The rendered list of comments.
 */
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
