import Layout from '../components/Layout';

export default function About() {
    return (
        <Layout>
            <section className="p-4">
                <h1 className="text-3xl font-bold mb-4">About Portfolio Sampler</h1>
                <p className="mb-2">
                    Welcome to the Portfolio Sampler, a web app implemented with Next.js. This platform showcases a collection of photos and allows users to add comments to them.
                </p>
                <p>
                    The backend of this application is powered by PHP scripts that interact with a MySQL database to store and retrieve photos and comments.
                </p>
            </section>
        </Layout>
    );
}
