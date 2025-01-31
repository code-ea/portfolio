import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      {/* Development Banner */}
      <div
        style={{
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '10px 0',
          marginBottom: '20px',
          fontWeight: 'bold',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #f5c6cb',
        }}
      >
        🚧 Website Under Development 🚧
      </div>

      {/* Main Content */}
      <h1>Hello, I'm Nitin</h1>
      <p>Welcome to my portfolio</p>
      <p>
        Check out my projects <Link to="/projects">here</Link> or learn more about me <Link to="/about">here</Link>
      </p>
    </div>
  );
};

export default Home;
