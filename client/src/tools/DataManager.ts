import { SamplesData, Photo } from './samples.model';

const RETRIEVE_SCRIPT: string = "http://my-api-server/retrieveAlbum.php?count=11";
const ADD_COMMENT_SCRIPT: string = "http://my-api-server/addComment.php";

export async function getSampleData(): Promise<Photo[]> {
    try {
        const response = await fetch(RETRIEVE_SCRIPT);
        if (!response.ok) {
            throw new Error("Failed to fetch sample data");
        }
        const data: SamplesData = await response.json();
        return data.photos;
    } catch (error) {
        console.error("Error fetching sample data:", error);
        return [];
    }
}

export async function addComment(photoId: number, author: string, comment: string): Promise<void> {
    try {
        const response = await fetch(ADD_COMMENT_SCRIPT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                photoId: photoId,
                author: author,
                comment: comment
            })
        });
        if (!response.ok) {
            throw new Error("Failed to add comment");
        }
    } catch (error) {
        console.error("Error adding comment:", error);
    }
}
