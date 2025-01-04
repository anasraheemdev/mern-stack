import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { GitHub, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative min-h-screen bg-black flex items-center">
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          background: {
            color: { value: "transparent" },
          },
          particles: {
            color: { value: "#dc3545" },
            links: {
              color: "#dc3545",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
              Hi, I'm <span className="text-red-500">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              Full Stack Developer | UI/UX Designer
            </p>
            <p className="text-gray-400 mb-8 max-w-lg">
              Passionate about creating beautiful, functional, and user-friendly web applications
              that solve real-world problems.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <GitHub size={24} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
              <img
                src="/api/placeholder/320/320"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-red-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;