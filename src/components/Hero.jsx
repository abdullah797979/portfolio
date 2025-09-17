import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Cpu,
  ShoppingCart,
} from 'lucide-react';

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['MERN Stack Developer', 'eCommerce Specialist', 'AI Integration Expert'];

  useEffect(() => {
    const handleTyping = () => {
      const current = currentRole % roles.length;
      const fullText = roles[current];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRole((currentRole + 1) % roles.length);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [displayText, isDeleting, currentRole, typingSpeed]);

  // Floating icon positions for desktop
  

  return (
    <section className="responsive-hero-section">
      {/* Animated background elements */}
      <div className="background-radials" />
      {/* Grid pattern */}
      <div className="background-grid" />
      {/* Floating colored glows */}
      <div className="floating-shape" style={{ top: '20%', left: '10%', animationDelay: '0s', width: '40px', height: '40px', background: 'linear-gradient(45deg, #4f46e5, #6366f1)' }}></div>
      <div className="floating-shape" style={{ top: '60%', left: '5%', animationDelay: '2s', width: '30px', height: '30px', background: 'linear-gradient(45deg, #ec4899, #f472b6)' }}></div>
      <div className="floating-shape" style={{ top: '30%', right: '15%', animationDelay: '4s', width: '50px', height: '50px', background: 'linear-gradient(45deg, #8b5cf6, #a78bfa)' }}></div>

      <div className="hero-content-wrapper">
        {/* Image with floating icons */}
        <div className="mobile-image-first hero-image-wrapper">
          <div className="hero-image-parent">
            <div
              className="hero-image"
              tabIndex={0}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Abdullah Afzaal"
              />
              <div className="image-gradient-overlay"></div>
            </div>
           
          </div>
        </div>

        {/* Left Content */}
        <div className="hero-text-content">
          <div className="hero-title-bar">
            <div className="hero-title-bar-gradient"></div>
            <p>Full-Stack Developer & eCommerce Specialist</p>
          </div>
          <h1 className="hero-title">
            Hi, I'm{' '}
            <span className="hero-title-gradient">
              Abdullah
            </span>
          </h1>
          <div className="hero-roles">
            <span className="role-intro">I am a&nbsp;</span>
            <span className="role-typing">{displayText}</span>
          </div>
          <p className="hero-description">
            I build exceptional digital experiences with modern technologies. Specializing in full-stack development, eCommerce solutions, and AI integration.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn primary">
              View Projects <svg style={{ width: 18, height: 18, verticalAlign: 'middle' }}><path d="M5 12l5-5 5 5"></path></svg>
            </button>
            <button className="hero-btn secondary">
              Get In Touch <Mail size={18} />
            </button>
          </div>
          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/abdullah-afzaal"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="Linkedin"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="Github"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:abdullahawan7979@gmail.com"
              className="hero-social-link"
              aria-label="Mail"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          .responsive-hero-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #0D0F13 0%, #151920 100%);
            color: #fff;
            padding: 2rem;
            font-family: 'Inter', sans-serif;
            position: relative;
            overflow: hidden;
          }
          .background-radials {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image:
              radial-gradient(circle at 15% 25%, rgba(79, 70, 229, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 85% 75%, rgba(236, 72, 153, 0.15) 0%, transparent 40%);
            z-index: 0;
          }
          .background-grid {
            position: absolute;
            inset: 0;
            opacity: 0.15;
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: 0;
          }
          .floating-shape {
            position: absolute;
            border-radius: 12px;
            opacity: 0.5;
            filter: blur(20px);
            animation: float 8s ease-in-out infinite;
            z-index: 0;
          }
          .hero-content-wrapper {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            z-index: 10;
            position: relative;
          }
          .hero-image-wrapper {
            flex: 1 1 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            padding: 2rem;
            animation: fadeIn 1s ease-out 0.5s both;
            order: 2;
            min-width: 270px;
            max-width: 100%;
          }
          .hero-image-parent {
            position: relative;
            width: 100%;
            max-width: 360px;
            aspect-ratio: 6/7;
          }
          .hero-image {
            width: 100%;
            height: 100%;
            border-radius: 24px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            transform: perspective(1000px) rotateX(5deg) rotateY(-10deg);
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            cursor: pointer;
          }
          .hero-image:focus, .hero-image:hover {
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
            box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          }
          .hero-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(30%) contrast(110%);
            border-radius: 24px;
          }
          .image-gradient-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(45deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2));
            mix-blend-mode: soft-light;
            border-radius: 24px;
          }
          .floating-icon {
            position: absolute;
            animation: float 6s ease-in-out infinite;
            z-index: 20;
            transition: filter 0.3s;
          }
          .floating-icon:nth-child(2) { animation-delay: 1s; }
          .floating-icon:nth-child(3) { animation-delay: 2s; }
          .icon-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: linear-gradient(145deg, #0c0e12, #10131a);
            box-shadow: 6px 6px 12px rgba(5, 5, 7, 0.8), -4px -4px 8px rgba(35, 35, 45, 0.2);
            color: #fff;
            transition: all 0.3s ease;
            padding: 0.5rem;
            text-align: center;
            font-size: 1rem;
          }
          .icon-container span {
            font-size: 0.7rem;
            margin-top: 0.3rem;
            white-space: nowrap;
          }
          .floating-icon:hover .icon-container,
          .floating-icon:focus .icon-container {
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(79, 70, 229, 0.5);
          }
          .hero-text-content {
            flex: 1 1 600px;
            padding: 2rem;
            animation: fadeIn 1s ease-out;
            order: 1;
            min-width: 280px;
            max-width: 640px;
          }
          .hero-title-bar {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .hero-title-bar-gradient {
            width: 6px;
            height: 40px;
            background: linear-gradient(to bottom, #4f46e5, #ec4899);
            border-radius: 3px;
          }
          .hero-title-bar p {
            color: #d1d5db;
            font-weight: 500;
            margin: 0;
          }
          .hero-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            margin-bottom: 1.5rem;
            line-height: 1.2;
          }
          .hero-title-gradient {
            background: linear-gradient(to right, #4f46e5, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 20px rgba(79, 70, 229, 0.5);
          }
          .hero-roles {
            font-size: clamp(1.2rem, 3vw, 1.5rem);
            margin-bottom: 1.5rem;
            min-height: 2.5rem;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
          }
          .role-intro {
            color: #d1d5db;
          }
          .role-typing {
            background: linear-gradient(to right, #4f46e5, #ec4899);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 600;
            border-right: 2px solid #4f46e5;
            padding-right: 2px;
            min-width: min-content;
          }
          .hero-description {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 2.5rem;
            color: #d1d5db;
            max-width: 500px;
          }
          .hero-buttons {
            display: flex;
            gap: 1rem;
            margin-bottom: 2.5rem;
            flex-wrap: wrap;
          }
          .hero-btn {
            padding: 0.75rem 2rem;
            border-radius: 8px;
            border: none;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);
          }
          .hero-btn.primary {
            background: linear-gradient(145deg, #4f46e5, #6366f1);
            color: #fff;
            border: none;
          }
          .hero-btn.primary:hover, .hero-btn.primary:focus {
            box-shadow: 0 6px 20px rgba(79, 70, 229, 0.6);
            transform: translateY(-2px);
          }
          .hero-btn.secondary {
            background: rgba(255,255,255,0.05);
            color: #fff;
            border: 1px solid rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
          }
          .hero-btn.secondary:hover, .hero-btn.secondary:focus {
            background: rgba(255,255,255,0.1);
            transform: translateY(-2px);
          }
          .hero-socials {
            display: flex;
            gap: 1rem;
          }
          .hero-social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            color: #d1d5db;
            transition: all 0.3s ease;
            font-size: 1.4rem;
          }
          .hero-social-link:hover, .hero-social-link:focus {
            background: rgba(79, 70, 229, 0.2);
            color: #fff;
            transform: translateY(-5px);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg);}
            50% { transform: translateY(-15px) rotate(5deg);}
            100% { transform: translateY(0) rotate(0deg);}
          }
          /* Responsive adjustments */
          @media (max-width: 1200px) {
            .hero-content-wrapper {
              flex-direction: column;
              align-items: stretch;
            }
            .hero-image-wrapper,
            .hero-text-content {
              max-width: 100%;
            }
          }
          @media (max-width: 968px) {
            .mobile-image-first {
              order: 1 !important;
              margin-bottom: 2rem;
            }
            .hero-text-content {
              order: 2 !important;
            }
            .floating-icon {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .responsive-hero-section {
              padding: 1rem;
            }
            .hero-content-wrapper {
              flex-direction: column;
              padding: 0;
            }
            .floating-shape {
              display: none;
            }
            .icon-container {
              width: 50px;
              height: 50px;
            }
            .icon-container span {
              display: none;
            }
            .hero-image-wrapper,
            .hero-text-content {
              padding: 1rem;
              min-width: 0;
            }
            .hero-title {
              font-size: 2.2rem;
            }
          }
          @media (max-width: 540px) {
            .hero-image-parent, .hero-image {
              max-width: 95vw;
              min-width: 0;
              width: 100%;
              height: auto;
              aspect-ratio: 6/7;
            }
            .hero-title {
              font-size: 1.7rem;
            }
            .hero-title-bar p, .hero-description, .role-typing, .role-intro {
              font-size: 0.98rem;
            }
            .hero-btn {
              font-size: 0.95rem;
              padding: 0.6rem 1.25rem;
            }
            .hero-social-link {
              width: 38px;
              height: 38px;
              font-size: 1.1rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;