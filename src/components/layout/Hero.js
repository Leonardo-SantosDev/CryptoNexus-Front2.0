import React from 'react';
import '../../styles/Hero.scss'; // Arquivo CSS para estilizar o hero


export default function Hero() {
    return (
      <>
        <div className="hero">
          <div className="hero-content">
            <h1>Welcome to Your Next Adventure</h1>
            <p>Discover endless possibilities with our platform.</p>
            <button className="hero-button">Get Started</button>
          </div>
        </div>
      </>
    );
}