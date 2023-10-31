import { AlbumData, Photo } from './samples.model';
import { getJSONData, sendJSONData } from '@/tools/Toolkit';

/**
 * Endpoint URL for retrieving album data.
 * @constant
 * @type {string}
 */
const RETRIEVE_SCRIPT: string = "http://localhost/retrieveAlbum.php?count=11";

/**
 * Endpoint URL for adding a comment to a photo.
 * @constant
 * @type {string}
 */
const ADD_COMMENT_SCRIPT: string = "http://localhost/addComment.php";

/**
 * Fetches the sample data (photos) from the server.
 * 
 * @async
 * @function
 * @returns {Promise<Photo[]>} - A promise that resolves to an array of photos.
 * @throws Will throw an error if the data format received is invalid or if there's an issue fetching the data.
 */
export async function getSampleData(): Promise<Photo[]> {
    try {
        const data: AlbumData = await getJSONData(RETRIEVE_SCRIPT);
        
        // Log the data for debugging purposes
        console.log("Received data:", data);

        if (!data || !data.photos) {
            throw new Error(`Invalid data format received. Data: ${JSON.stringify(data)}`);
        }
        return data.photos;
    } catch (error) {
        console.error("Error fetching sample data:", error);
        throw error; // Propagate the error up
    }
}

/**
 * Adds a comment to a specific photo.
 * 
 * @async
 * @function
 * @param {number} photoId - The ID of the photo to which the comment should be added.
 * @param {string} author - The author of the comment.
 * @param {string} comment - The content of the comment.
 * @returns {Promise<void>} - A promise that resolves when the comment is successfully added.
 * @throws Will throw an error if there's an issue adding the comment.
 */
export async function addComment(photoId: number, author: string, comment: string): Promise<void> {
    try {
        await sendJSONData(ADD_COMMENT_SCRIPT, {
            photoId: photoId,
            author: author,
            comment: comment
        }, 
        (responseText: string) => {
            console.log("Comment added successfully:", responseText);
        },
        (error: Error) => {
            console.error("Error adding comment:", error);
            throw error; // Propagate the error up
        });
    } catch (error) {
        console.error("Error adding comment:", error);
        throw error; // Error Checking
    }
}
