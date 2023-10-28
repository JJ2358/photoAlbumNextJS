import React, { useState } from 'react';

interface AddCommentProps {
    onAdd: (author: string, comment: string) => void;
}

const AddComment: React.FC<AddCommentProps> = ({ onAdd }) => {
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(author, comment);
        setAuthor('');
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Author" 
                required 
            />
            <textarea 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                placeholder="Comment" 
                required 
            />
            <button type="submit">Add Comment</button>
        </form>
    );
}

export default AddComment;
