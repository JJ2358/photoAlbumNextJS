/**
 * Home component.
 * 
 * This component is responsible for rendering the main photo album page.
 * It fetches the sample data, displays the current photo, and provides navigation controls.
 * Additionally, it allows users to add comments to the current photo.
 * 
 * @module Home
 */

import { useEffect, useState } from 'react';
import { getSampleData, addComment } from '../tools/DataManager';
import Navigation from '../components/Navigation';
import CommentsList from '../components/Comments';
import AddCommentComponent from '../components/AddComments';
import { Photo } from '@/tools/samples.model';
import Jump from '../components/Jump';


export default function Home() {
  /**
   * State variables.
   */
  const [samples, setSamples] = useState<Photo[]>([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch the sample data on component mount.
   */
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSampleData();
        setSamples(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      }
    }
    fetchData();
  }, []);

  /**
   * Navigate to the next photo.
   */
  const handleNext = () => {
    if (currentPhotoIndex < samples.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  /**
   * Navigate to the previous photo.
   */
  const handlePrev = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  /**
   * Add a comment to the current photo.
   * 
   * @param {string} author - The author of the comment.
   * @param {string} comment - The comment text.
   */
  const handleAddComment = async (author: string, comment: string) => {
    try {
      await addComment(samples[currentPhotoIndex].id, author, comment);
      // Refresh the data to show the new comment
      const data = await getSampleData();
      setSamples(data);
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  /**
   * Render the component.
   */
  return (
    <div className="flex flex-col items-center justify-center">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : samples.length > 0 ? (
        <div className="w-full max-w-2xl">
          <img className="mx-auto mb-4 rounded-xl" src={`/images/photos/${samples[currentPhotoIndex].source}`} alt={samples[currentPhotoIndex].title} />
          <h2 className="text-2xl font-bold mb-2">{samples[currentPhotoIndex].title}</h2>
          <p className="mb-4">{samples[currentPhotoIndex].caption}</p>
          <CommentsList comments={samples[currentPhotoIndex].comments || []} />
          <AddCommentComponent onAdd={handleAddComment} />
          <Jump photos={samples} onJump={setCurrentPhotoIndex} currentPhotoIndex={currentPhotoIndex} />
          <Navigation onNext={handleNext} onPrev={handlePrev} currentPhotoIndex={currentPhotoIndex} totalPhotos={samples.length} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
