import './tailwind.css';

import Navbar from './components/navbar';
import Projects from './components/projects';
import Resume from './components/resume';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <header className="hero bg-blue-500 text-white p-8">
                <h1 className="text-4xl font-bold">Tyler Chartrand</h1>
                <p className="text-xl">Software Engineer | Problem Solver | Tech Enthusiast</p>
            </header>
            <Projects />
            <Resume />
        </div>
    );
};


export default App;


