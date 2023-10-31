/**
 * Jump Component
 * 
 * This component displays a horizontal list of photo thumbnails, allowing users to quickly jump to a specific photo in the album.
 * 
 * Props:
 * - photos: An array of Photo objects representing the photos in the album.
 * - onJump: A callback function that updates the current photo index when a thumbnail is clicked.
 * - currentPhotoIndex: The index of the currently displayed photo.
 */

import React from 'react';
import { Photo } from '@/tools/samples.model';

interface JumpProps {
    photos: Photo[];
    onJump: (index: number) => void;
    currentPhotoIndex: number;
}

const Jump: React.FC<JumpProps> = ({ photos, onJump, currentPhotoIndex }) => {
    return (
        <div className="flex flex-wrap justify-center mb-4">
            {photos.map((photo, index) => (
                <div key={photo.id} className={`m-1 ${currentPhotoIndex === index ? 'border-2 border-blue-500' : ''}`}>
                    <img 
                        src={`/images/photos/${photo.source}`} 
                        alt={photo.title} 
                        className="w-16 h-16 cursor-pointer hover:opacity-75"
                        onClick={() => onJump(index)}
                    />
                </div>
            ))}
        </div>
    );
}

export default Jump;
