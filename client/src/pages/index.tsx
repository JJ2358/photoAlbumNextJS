import { useEffect, useState } from 'react';
import { getSampleData } from '../tools/DataManager';
import { Sample } from '../tools/samples.model';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

export default function Home() {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getSampleData();
      setSamples(data);
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

  return (
    <Layout>
      {samples.length > 0 ? (
        <div>
          <img src={`/images/${samples[currentPhotoIndex].source}`} alt={samples[currentPhotoIndex].title} />
          <h2>{samples[currentPhotoIndex].title}</h2>
          <p>{samples[currentPhotoIndex].caption}</p>
          <Navigation onNext={handleNext} onPrev={handlePrev} currentPhotoIndex={currentPhotoIndex} totalPhotos={samples.length} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
}
