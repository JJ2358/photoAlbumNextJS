import { AlbumData, Photo } from './samples.model';
import { getJSONData, sendJSONData } from '@/tools/Toolkit';

const RETRIEVE_SCRIPT: string = "http://localhost/retrieveAlbum.php?count=11";
const ADD_COMMENT_SCRIPT: string = "http://localhost/addComment.php";

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
        throw error; // Propagate the error up
    }
}
