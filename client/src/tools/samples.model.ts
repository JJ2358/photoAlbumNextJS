// Represents a single photo in the album
export interface Photo {
    id: number;
    title: string;
    caption: string;
    source: string; // URL or path to the image
    width?: number; // Optional width of the photo
    height?: number; // Optional height of the photo
    comments: Comment[]; // Array of comments associated with the photo
}

// Represents a comment on a photo
export interface Comment {
    id: number;
    photoId: number; // ID of the photo the comment is associated with
    comment: string; // Comment text
    author: string; // Author of the comment
}

// Represents the entire photo album data
export interface PhotoAlbumData {
    photos: Photo[];
}
