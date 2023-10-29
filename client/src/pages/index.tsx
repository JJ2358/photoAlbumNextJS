import { useEffect, useState } from 'react';
import { getSampleData, addComment } from '../tools/DataManager';
import Navigation from '../components/Navigation';
import CommentsList from '../components/Comments';
import AddCommentComponent from '../components/AddComments';
import { Photo } from '@/tools/samples.model';

export default function Home() {
  const [samples, setSamples] = useState<Photo[]>([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

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

  const handleNext = () => {
    if (currentPhotoIndex < samples.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

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

  return (
    <>
      {error ? (
        <p>Error: {error}</p>
      ) : samples.length > 0 ? (
        <div>
          <img src={`/images/photos/${samples[currentPhotoIndex].source}`} alt={samples[currentPhotoIndex].title} />
          
          <h2>{samples[currentPhotoIndex].title}</h2>
          <p>{samples[currentPhotoIndex].caption}</p>
          <CommentsList comments={samples[currentPhotoIndex].comments || []} />
          <AddCommentComponent onAdd={handleAddComment} />
          <Navigation onNext={handleNext} onPrev={handlePrev} currentPhotoIndex={currentPhotoIndex} totalPhotos={samples.length} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
