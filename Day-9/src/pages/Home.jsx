import Navbar from '../components/Navbar'
import '../styles/index.css'

function Home() {
    return (
        <>
        <Navbar />
            <div className="mt-10 hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-screen">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <h3>Get Started</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;
