import './App.css'

import Navbar from './components/navbar';
import Projects from './components/projects';
import Resume from './components/resume';

const App = () => {
    return (
        <div>
            <Navbar />
            <header className="hero">
                <h1>Tyler Chartrand</h1>
                <p>Software Engineer | Problem Solver | Tech Enthusiast</p>
            </header>
            <Projects />
            <Resume />
        </div>
    );
};

export default App;


