import React, { useState } from 'react';

/**
 * Props for the AddComment component.
 * 
 * @interface
 * @property {Function} onAdd - Callback function to handle the addition of a new comment.
 */
interface AddCommentProps {
    onAdd: (author: string, comment: string) => void;
}

/**
 * Represents a form to add a new comment.
 * 
 * @component
 * @param {AddCommentProps} props - The props for the component.
 * @returns {ReactElement} The rendered form for adding a comment.
 */
const AddComment: React.FC<AddCommentProps> = ({ onAdd }) => {
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');

    /**
     * Handles the form submission.
     * 
     * @function
     * @param {React.FormEvent} e - The form event.
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(author, comment);
        setAuthor('');
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mb-4">
            <input 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Author" 
                required 
                className="border p-2 rounded"
            />
            <textarea 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                placeholder="Comment" 
                required 
                className="border p-2 rounded"
                rows={3}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Comment</button>
        </form>
    );
}

export default AddComment;
