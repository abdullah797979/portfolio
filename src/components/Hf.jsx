import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code2, Mail, Github, Linkedin, Twitter, Home, User, FileText, Briefcase, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({ width: 0, left: 0 });
  const location = useLocation();
  const navRef = useRef(null);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  // Update active indicator position
  useEffect(() => {
    updateActiveIndicator();
    window.addEventListener('resize', updateActiveIndicator);
    
    return () => {
      window.removeEventListener('resize', updateActiveIndicator);
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When route changes, close menu and unlock scroll
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const updateActiveIndicator = () => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(`a[href="${location.pathname}"]`);
      if (activeLink) {
        setActiveIndicator({
          width: activeLink.offsetWidth,
          left: activeLink.offsetLeft
        });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/about', label: 'About', icon: <User size={18} /> },
    { path: '/resume', label: 'Resume', icon: <FileText size={18} /> },
    { path: '/services', label: 'Services', icon: <Briefcase size={18} /> },
    { path: '/projects', label: 'Projects', icon: <Code2 size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Phone size={18} /> },
  ];

  return (
    <>
      <header
        className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          padding: '1rem 3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000,
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="logo"
          style={{
            fontWeight: 700,
            fontSize: '1.5rem',
            background: 'linear-gradient(to right, #4f46e5, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            zIndex: 1002,
            paddingLeft: '1rem' // Added left padding for desktop
          }}
        >
          <Code2 size={24} />
          Abdullah
        </Link>

        {/* Desktop Navigation */}
        <nav
          ref={navRef}
          className="desktop-nav"
          style={{
            display: 'flex',
            position: 'relative',
            gap: '2rem',
            alignItems: 'center',
            paddingRight: '1rem' // Added right padding for desktop
          }}
        >
          {/* Active indicator */}
          <div 
            className="active-indicator"
            style={{
              position: 'absolute',
              bottom: '-5px',
              height: '2px',
              background: 'linear-gradient(to right, #4f46e5, #ec4899)',
              transition: 'all 0.3s ease',
              width: `${activeIndicator.width}px`,
              left: `${activeIndicator.left}px`,
              borderRadius: '2px'
            }}
          />
          
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              style={{
                color: location.pathname === item.path ? '#4f46e5' : '#d1d5db',
                textDecoration: 'none',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0',
                position: 'relative'
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-btn"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          style={{
            background: 'none',
            border: 'none',
            color: '#d1d5db',
            cursor: 'pointer',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            position: 'relative',
            zIndex: 1002
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        
        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-header">
           
          </div>
          
          <nav className="mobile-nav-items">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          
          <div className="mobile-nav-footer">
            <div className="social-links">
              <a href="https://github.com/abdullah797979" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/abdullahafzaal79/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              
              <a href="mailto:abdullahawan7979@gmail.com">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <style>
        {`
          /* Header background transitions */
          .header {
            background: transparent;
            border-bottom: 1px solid transparent;
          }
          
          .header.scrolled {
            background: rgba(13, 15, 19, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          /* Navigation links */
          .nav-link:hover {
            color: #fff !important;
          }
          
          /* Mobile nav overlay */
          .mobile-nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            z-index: 998;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }
          
          .mobile-nav-overlay.open {
            opacity: 1;
            visibility: visible;
          }
          
          /* Mobile navigation */
          .mobile-nav {
            position: fixed;
            top: 0;
            left: -100%;
            width: 85%;
            max-width: 400px;
            height: 100vh;
            background: rgba(13, 15, 19, 0.98);
            backdrop-filter: blur(10px);
            z-index: 999;
            display: flex;
            flex-direction: column;
            padding: 2rem;
            transition: all 0.4s ease;
            box-shadow: 10px 0 30px rgba(0, 0, 0, 0.3);
          }
          
          .mobile-nav.open {
            left: 0;
          }
          
          .mobile-nav-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .mobile-nav-items {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            flex: 1;
          }
          
          .mobile-nav-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 1.5rem;
            color: #d1d5db;
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.3s ease;
            transform: translateX(-20px);
            opacity: 0;
            animation: slideIn 0.5s forwards;
          }
          
          .mobile-nav-link.active {
            color: #4f46e5;
            background: rgba(79, 70, 229, 0.1);
          }
          
          .mobile-nav-link:hover {
            background: rgba(255, 255, 255, 0.05);
            color: #fff;
          }
          
          .mobile-nav-footer {
            margin-top: auto;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
          
          .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: '50%';
            background: rgba(255, 255, 255, 0.05);
            color: #d1d5db;
            transition: all 0.3s ease;
          }
          
          .social-links a:hover {
            background: rgba(79, 70, 229, 0.2);
            color: #fff;
            transform: translateY(-3px);
          }
          
          /* Animations */
          @keyframes slideIn {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          /* Responsive styles */
          @media (max-width: 968px) {
            .desktop-nav {
              display: none !important;
            }
            
            .mobile-menu-btn {
              display: flex !important;
            }
            
            .header {
              padding: 1rem 1.5rem !important;
            }
            
            .logo:not(.mobile-only-logo) {
              padding-left: 0 !important;
            }
          }
          
          @media (max-width: 480px) {
            .header {
              padding: 1rem !important;
            }
            
            .mobile-nav {
              width: 100%;
              max-width: 100%;
            }
            
            .mobile-only-logo {
              display: flex !important;
            }
          }
          
          /* Hide mobile logo on desktop */
          @media (min-width: 969px) {
            .mobile-only-logo {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
};


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#0D0F13',
        color: '#fff',
        padding: '3rem 2rem',
        fontFamily: "'Inter', sans-serif",
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        
          
          

        

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            gap: '1rem'
          }}
        >
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#d1d5db',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(79, 70, 229, 0.2)';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.color = '#d1d5db';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#d1d5db',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(79, 70, 229, 0.2)';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.color = '#d1d5db';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#d1d5db',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(79, 70, 229, 0.2)';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.color = '#d1d5db';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:abdullahawan7979@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#d1d5db',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(79, 70, 229, 0.2)';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.color = '#d1d5db';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <Mail size={20} />
          </a>
        </div>

{/* Navigation Links */}
        <nav
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem'
          }}
        >
          <Link
            to="/"
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
            onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
            onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
          >
            About
          </Link>
          <Link
            to="/resume"
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
            onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
          >
            Resume
          </Link>
          <Link
            to="/services"
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
            onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
          >
            Services
          </Link>
          <Link
            to="/projects"
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
            onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            style={{
              color: '#d1d5db',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4f46e5'}
            onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
          >
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <div
          style={{
            color: '#d1d5db',
            textAlign: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            width: '100%',
            marginTop: '1rem'
          }}
        >
          <p>© {currentYear} Abdullah Afzaal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Header, Footer };