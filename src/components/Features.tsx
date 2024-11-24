import React from 'react';
import { Zap, Shield, Star } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon={<Zap size={40} />} title="Fast" description="Lightning quick performance" />
          <FeatureCard icon={<Shield size={40} />} title="Secure" description="Your data is safe with us" />
          <FeatureCard icon={<Star size={40} />} title="Reliable" description="Always available when you need it" />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Features;