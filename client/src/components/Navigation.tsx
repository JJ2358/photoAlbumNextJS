import React from 'react';

/**
 * Props for the Navigation component.
 * 
 * @interface
 * @property {() => void} onNext - Callback function to navigate to the next photo.
 * @property {() => void} onPrev - Callback function to navigate to the previous photo.
 * @property {number} currentPhotoIndex - The index of the currently displayed photo.
 * @property {number} totalPhotos - The total number of photos in the album.
 */
interface NavigationProps {
    onNext: () => void;
    onPrev: () => void;
    currentPhotoIndex: number;
    totalPhotos: number;
}

/**
 * Represents the navigation controls for the photo album.
 * 
 * @component
 * @param {NavigationProps} props - The props for the component.
 * @returns {ReactElement} The rendered navigation controls with "Previous" and "Next" buttons.
 */
const Navigation: React.FC<NavigationProps> = ({ onNext, onPrev, currentPhotoIndex, totalPhotos }) => {
    return (
        <div className="flex justify-between items-center mt-4">
            <button 
                className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPhotoIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                onClick={onPrev}
                disabled={currentPhotoIndex === 0}
            >
                Previous
            </button>
            <span>Photo: {currentPhotoIndex + 1} of {totalPhotos}</span>
            <button 
                className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPhotoIndex === totalPhotos - 1 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                onClick={onNext}
                disabled={currentPhotoIndex === totalPhotos - 1}
            >
                Next
            </button>
        </div>
    );
}

export default Navigation;
