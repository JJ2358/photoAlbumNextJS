import { useEffect, useState } from 'react';
import { getSampleData } from '../tools/DataManager';
import { Sample } from '../tools/samples.model';
import Layout from '../components/Layout';

export default function Home() {
    const [samples, setSamples] = useState<Sample[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getSampleData();
            setSamples(data);
        }
        fetchData();
    }, []);

    return (
        <Layout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {samples.map((sample) => (
                    <div key={sample.id} className="border border-white p-4 rounded">
                        <img src={sample.source} alt={sample.title} className="w-full h-64 object-cover rounded" />
                        <h2 className="text-xl mt-2">{sample.title}</h2>
                        <p>{sample.caption}</p>
                        {sample.comments && sample.comments.length > 0 && (
                            <div className="mt-4">
                                <h3 className="text-lg mb-2">Comments:</h3>
                                <ul>
                                    {sample.comments.map((comment, index) => (
                                        <li key={index}>
                                            <strong>{comment.author}:</strong> {comment.comment}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Layout>
    );
}
