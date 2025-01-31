import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', margin: '20px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
