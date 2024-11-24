import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
        <p className="text-xl mb-8">Discover amazing features and services</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;