import React, { useState, useEffect } from 'react';
import { Code2 } from 'lucide-react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (Math.random() * 15);
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  // When progress reaches 100%, wait a moment then fade out
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #0D0F13 0%, #151920 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      color: '#fff',
      fontFamily: "'Inter', sans-serif",
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.5s ease-in-out',
      pointerEvents: isVisible ? 'auto' : 'none'
    }}>
      {/* Holographic background elements */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '30%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #4f46e5, #ec4899)',
        opacity: 0.1,
        filter: 'blur(40px)',
        animation: 'float 6s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '30%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #ec4899, #4f46e5)',
        opacity: 0.1,
        filter: 'blur(30px)',
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>
      
      {/* Main loader content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
      }}>
        {/* Animated icon */}
        <div style={{
          position: 'relative',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            animation: 'pulse 2s infinite alternate'
          }}>
            <Code2 size={40} color="#4f46e5" style={{
              animation: 'spin 3s linear infinite'
            }} />
          </div>
          
          {/* Orbiting dots */}
          <div style={{
            position: 'absolute',
            top: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #4f46e5, #6366f1)',
            animation: 'orbit 2s linear infinite'
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #ec4899, #f472b6)',
            animation: 'orbitReverse 2.5s linear infinite'
          }}></div>
        </div>
        
        {/* Loading text */}
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1.5rem',
          background: 'linear-gradient(to right, #4f46e5, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Loading Portfolio</h3>
        
        {/* Progress bar */}
        <div style={{
          width: '280px',
          height: '6px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '1rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(to right, #4f46e5, #ec4899)',
            borderRadius: '10px',
            transition: 'width 0.3s ease',
            boxShadow: '0 0 10px rgba(79, 70, 229, 0.5)'
          }}></div>
        </div>
        
        {/* Progress percentage */}
        <p style={{
          fontSize: '0.9rem',
          color: '#d1d5db'
        }}>{Math.min(100, Math.round(progress))}%</p>
      </div>
      
      {/* Global Styles */}
      <style>
        {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); }
          100% { transform: scale(1.05); box-shadow: 0 12px 40px rgba(79, 70, 229, 0.3); }
        }
        
        @keyframes orbit {
          0% { transform: translateX(-50%) rotate(0deg) translateY(-40px) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg) translateY(-40px) rotate(-360deg); }
        }
        
        @keyframes orbitReverse {
          0% { transform: translateX(-50%) rotate(0deg) translateY(40px) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(-360deg) translateY(40px) rotate(360deg); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        `}
      </style>
    </div>
  );
};

export default Preloader;