import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Hello, I'm Nitin</h1>
      <p>Welcome to my portfolio</p>
      <p>
        Check out my projects <Link to="/projects">here</Link> or learn more about me <Link to="/about">here</Link>
      </p>
    </div>
  );
};

export default Home;
