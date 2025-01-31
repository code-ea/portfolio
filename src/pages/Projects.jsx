import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ProjectCard
          title="Paytm Clone"
          description="A clone of Paytm built with React, Node.js, and MongoDB."
          link="https://www.nitin-dev.com/"
        />
        <ProjectCard
          title="ShopApp"
          description="A full-fledged e-commerce UI app with React."
          link="https://shopapp.nitin-dev.com/"
        />
      </div>
    </div>
  );
};

export default Projects;
