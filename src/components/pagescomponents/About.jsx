import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-6">📦 E-Commerce Project Overview</h1>

      {/* Project Description */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About the Project</h2>
        <p>
          This is a full-stack e-commerce website built using React.js, Tailwind CSS, Node.js, Express, and MongoDB. 
          It allows users to browse products, view details, manage cart items, register, and login securely.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Tech Stack Used</h2>
        <ul className="list-disc pl-6">
          <li>Frontend: React.js, Tailwind CSS</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB</li>
          <li>Authentication: Bcrypt</li>
          <li>State Management: Redux</li>
          <li>Routing: React Router DOM</li>
        </ul>
      </section>

      {/* Features */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">✨ Key Features</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>🔐 User Registration and Login with bcrypt password encryption</li>
          <li>🛒 Add to Cart with quantity management and remove option</li>
          <li>📄 Product Detail Pages</li>
          <li>📊 Sort products by price (Low to High, High to Low)</li>
          <li>📱 Fully responsive UI using Tailwind CSS</li>
          <li>🚀 Seamless navigation with React Router</li>
        </ul>
      </section>

      {/* What I Learned */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">📚 What I Learned</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>React state management using <code>useState</code> and <code>useEffect</code></li>
          <li>Global state management with Redux</li>
          <li>Creating responsive UI with Tailwind CSS</li>
          <li>Secure authentication using bcrypt and Express</li>
          <li>Working with MongoDB and Express backend</li>
        </ul>
      </section>

      {/* Links */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">🔗 Project Links</h2>
        
      <p className="mb-2 text-lg text-black">
        GitHub Repo: <a href="#" target="_blank" className="underline hover:text-blue-400">[Your Repo Link Here]</a>
      </p>
      <p className="mb-8 text-lg text-black">
        Live Demo: <a href="#" target="_blank" className="underline hover:text-blue-400">[Your Hosted Link Here]</a>
      </p>
      </section>
    </div>
  );
};

export default About;
