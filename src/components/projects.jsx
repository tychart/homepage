import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/TylerChartrand/repos')
            .then(response => response.json())
            .then(data => {
                console.log('GitHub API response:', data); // Debugging
                if (Array.isArray(data)) {
                    setRepos(data);
                } else {
                    console.error('Unexpected API response:', data);
                    setRepos([]); // Default to empty array
                }
            })
            .catch(error => {
                console.error('Error fetching GitHub repos:', error);
                setRepos([]); // Ensure repos is always an array
            });
    }, []);

    return (
        <section id="projects">
            <h2>Projects</h2>
            {repos.length > 0 ? (
                <ul>
                    {repos.map(repo => (
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading or no repositories found.</p>
            )}
        </section>
    );
};

export default Projects;
