/**
 * Represents a single photo in the album.
 * 
 * @interface
 * @property {number} id - The unique identifier for the photo.
 * @property {string} title - The title of the photo.
 * @property {string} caption - A brief description or caption for the photo.
 * @property {string} source - The file path or URL to the photo.
 * @property {Comment[]} comments - An array of comments associated with the photo.
 */
export interface Photo {
  id: number;
  title: string;
  caption: string;
  source: string;
  comments: Comment[];
}

/**
 * Represents a comment on a photo.
 * 
 * @interface
 * @property {string} comment - The text of the comment.
 * @property {string} author - The author or user who wrote the comment.
 */
export interface Comment {
  comment: string;
  author: string;
}

/**
 * Represents the data structure for the entire album.
 * 
 * @interface
 * @property {Photo[]} photos - An array of photos in the album.
 */
export interface AlbumData {
  photos: Photo[];
}

/**
 * Alias for the Photo interface.
 * 
 * @typedef Sample
 */
export type Sample = Photo;
