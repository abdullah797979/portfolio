import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight, Filter, X, Eye, Code, ShoppingCart, Cpu, Database, Zap, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Green Garden",
      description: "AI-Powered E-Commerce Platform with plant recognition and chatbot assistant",
      fullDescription: "A full-stack MERN eCommerce platform specializing in gardening products. Features include user authentication, product catalog, shopping cart, secure checkout, and a unique gardener booking system. Integrated AI capabilities including a CNN-based plant recognition model and AI chatbot for customer support.",
      featureImage: "/Main.png",
      images: [
        "/Main.png",
        "/m2.png",
        "/m6.png",
        
        "/m5.png",
        "/m3.png",
        "/m4.png"
        
        
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CNN", "ChatGPT"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "User authentication system",
        "AI-powered plant recognition",
        "Shopping cart & secure checkout",
        "Gardener booking system",
        "Admin panel for management"
      ]
    },
    {
      id: 2,
      title: "Toologi",
      description: "Online Tools Directory with 500+ calculators and utility tools",
      fullDescription: "A comprehensive WordPress-based directory featuring over 500 online tools and calculators. Built with custom PHP features, MySQL database, and Elementor for responsive design. Implemented SEO strategies to improve visibility and organic traffic.",
      featureImage: "/t2.png",
      images: [
        "/t1.png",
        "/t2.png"
        
      ],
      technologies: ["WordPress", "PHP", "MySQL", "Elementor", "SEO"],
      category: "web",
      liveUrl: "https://toologi.com/",
      githubUrl: "#",
      features: [
        "500+ online tools and calculators",
        "Custom PHP development",
        "SEO optimized structure",
        "Responsive design with Elementor",
        "Google Analytics integration"
      ]
    },
    {
      id: 3,
      title: "SDP Store",
      description: "Dropshipping E-Commerce Store with automated product imports",
      fullDescription: "A WordPress/WooCommerce-based dropshipping store with automated product imports, secure payment integration, and SEO optimization. Utilized AI tools for product descriptions and content generation to streamline operations.",
      featureImage: "/m1.png",
      images: [
        "/m1.png",
        "/s2.png",
        "/s1.png"
      ],
      technologies: ["WordPress", "WooCommerce", "Payment Integration", "SEO"],
      category: "ecommerce",
      liveUrl: "https://sdp.today/",
      githubUrl: "#",
      features: [
        "Automated product imports",
        "Secure payment gateway integration",
        "SEO optimization",
        "AI-assisted content generation",
        "Order management system"
      ]
    },
    {
      id: 4,
      title: "AI Chatbot Integration",
      description: "Custom AI chatbot implementation for customer service",
      fullDescription: "A custom AI chatbot solution integrated into existing platforms to handle customer inquiries, provide product recommendations, and assist with troubleshooting. Built with natural language processing capabilities.",
      featureImage: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
      images: [
        "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ],
      technologies: ["AI Integration", "NLP", "JavaScript", "Node.js"],
      category: "ai",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Natural language processing",
        "Product recommendation engine",
        "24/7 customer support",
        "Multi-platform integration",
        "Custom training based on business needs"
      ]
    },
    {
  id: 5,
  title: "Portfolio Website",
  description: "Personal portfolio website showcasing projects, resume, and services.",
  fullDescription: "A professional developer portfolio built with React, TailwindCSS, Framer Motion, and Three.js. The site includes advanced 3D animations, smooth transitions, multi-page navigation (Home, About, Resume, Services, Projects, Contact), and a CV download feature.",
  featureImage: "/p2.png",
  images: [
    "/p2.png",
    "/p3.png",
    "/p1.png"
  ],
  technologies: ["React", "TailwindCSS", "Framer Motion", "Three.js"],
  category: "web",
  liveUrl: "#",
  githubUrl: "#",
  features: [
    "Fully responsive design",
    "Advanced 3D animations",
    "Smooth page transitions",
    "Multi-page layout (Home, About, Resume, Services, Projects, Contact)",
    "CV download functionality"
  ]
}

  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'ai', label: 'AI Integration' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) closeProjectModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0D0F13 0%, #151920 100%)',
        color: '#fff',
        padding: '4rem 1rem',
        fontFamily: "'Inter', sans-serif",
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Page Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '1rem',
              background: 'linear-gradient(to right, #4f46e5, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            My Projects
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#d1d5db',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            A collection of my work showcasing full-stack development, eCommerce solutions, and AI integration
          </p>
        </div>

        {/* Filter Buttons - Desktop */}
        <div
          style={{
            display: isMobile ? 'none' : 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: activeFilter === filter.id 
                  ? 'linear-gradient(145deg, #4f46e5, #6366f1)' 
                  : 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: activeFilter === filter.id 
                  ? '0 10px 20px rgba(79, 70, 229, 0.3)' 
                  : '5px 5px 10px #0a0b0e, -5px -5px 10px #1a1d24'
              }}
            >
              <Filter size={18} />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Filter Dropdown - Mobile */}
        {isMobile && (
          <div
            style={{
              position: 'relative',
              marginBottom: '2rem',
              width: '100%',
              maxWidth: '300px',
              margin: '0 auto 2rem'
            }}
          >
            <button
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: '100%',
                justifyContent: 'space-between',
                boxShadow: '5px 5px 10px #0a0b0e, -5px -5px 10px #1a1d24'
              }}
            >
              <span>
                <Filter size={18} style={{ marginRight: '0.5rem' }} />
                {filters.find(f => f.id === activeFilter)?.label}
              </span>
              <span style={{ transform: showFilterDropdown ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
            </button>
            
            {showFilterDropdown && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'rgba(21, 25, 32, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  marginTop: '0.5rem',
                  padding: '0.5rem',
                  zIndex: 100,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => {
                      setActiveFilter(filter.id);
                      setShowFilterDropdown(false);
                    }}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: activeFilter === filter.id 
                        ? 'rgba(79, 70, 229, 0.2)' 
                        : 'transparent',
                      color: activeFilter === filter.id ? '#4f46e5' : '#d1d5db',
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="project-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                height: '400px',
                perspective: '1000px'
              }}
              onClick={() => openProjectModal(project)}
            >
              <div
                className="card-inner"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.8s',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Front of Card */}
                <div
                  className="card-front"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    borderRadius: '20px',
                    background: 'linear-gradient(145deg, #151920, #0D0F13)',
                    boxShadow: '10px 10px 20px #0a0b0e, -10px -10px 20px #1a1d24',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      height: '200px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={project.featureImage}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        display: 'flex',
                        gap: '0.5rem'
                      }}
                    >
                      {project.category === 'web' && (
                        <span
                          style={{
                            background: 'rgba(79, 70, 229, 0.8)',
                            color: '#fff',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 500
                          }}
                        >
                          Web App
                        </span>
                      )}
                      {project.category === 'ecommerce' && (
                        <span
                          style={{
                            background: 'rgba(236, 72, 153, 0.8)',
                            color: '#fff',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 500
                          }}
                        >
                          E-Commerce
                        </span>
                      )}
                      {project.category === 'ai' && (
                        <span
                          style={{
                            background: 'rgba(139, 92, 246, 0.8)',
                            color: '#fff',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 500
                          }}
                        >
                          AI Integration
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      padding: '1.5rem',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <h3
                      className="card-title"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        marginBottom: '0.5rem',
                        background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        color: '#d1d5db',
                        lineHeight: 1.6,
                        marginBottom: '1rem',
                        flex: 1
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#4f46e5',
                          fontWeight: 500
                        }}
                      >
                        <Eye size={18} />
                        View Details
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          gap: '0.5rem'
                        }}
                      >
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: '#d1d5db',
                              transition: 'all 0.3s ease',
                              boxShadow: '3px 3px 6px '
                            }}
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: '#d1d5db',
                              transition: 'all 0.3s ease',
                              boxShadow: '3px 3px 6px '
                            }}
                          >
                            <Github size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="card-back"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    borderRadius: '20px',
                    background: 'linear-gradient(145deg, #151920, #0D0F13)',
                    boxShadow: '10px 10px 20px #0a0b0e, -10px -10px 20px #1a1d24',
                    transform: 'rotateY(180deg)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      marginBottom: '1rem',
                      background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Technologies
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        style={{
                          background: 'rgba(79, 70, 229, 0.2)',
                          color: '#fff',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          border: '1px solid rgba(79, 70, 229, 0.5)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#4f46e5',
                      fontWeight: 500
                    }}
                  >
                    <Eye size={18} />
                    Click to view project details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: isMobile ? '0' : '1rem',
            backdropFilter: 'blur(10px)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch' // For smooth scrolling on iOS
          }}
          onClick={closeProjectModal}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #151920 0%, #0D0F13 100%)',
              borderRadius: isMobile ? '0' : '20px',
              maxWidth: '1200px',
              width: '100%',
              maxHeight: isMobile ? '100%' : '90vh',
              minHeight: isMobile ? '100vh' : 'auto',
              overflow: 'hidden',
              position: 'relative',
              border: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeProjectModal}
              style={{
                position: 'absolute',
                top: isMobile ? '1.5rem' : '1rem',
                right: isMobile ? '1.5rem' : '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 10,
                backdropFilter: 'blur(10px)',
                boxShadow: '3px 3px 6px #0a0b0e, -3px -3px 6px #1a1d24'
              }}
            >
              <X size={24} />
            </button>

            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                width: '100%',
                height: isMobile ? 'auto' : '100%'
              }}
            >
              {/* Image Gallery Section */}
              <div
                style={{
                  flex: isMobile ? '0 0 auto' : '0 0 55%',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#000',
                  height: isMobile ? '40vh' : 'auto',
                  minHeight: isMobile ? '300px' : 'auto'
                }}
              >
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  style={{
                    width: '100%',
                    height: isMobile ? '100%' : '100%',
                    objectFit: 'contain',
                    maxHeight: isMobile ? '40vh' : '80vh'
                  }}
                />
                
                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        cursor: 'pointer',
                        zIndex: 10,
                        backdropFilter: 'blur(5px)'
                      }}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        cursor: 'pointer',
                        zIndex: 10,
                        backdropFilter: 'blur(5px)'
                      }}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
                
                {/* Image Indicators */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '0.5rem',
                    zIndex: 10
                  }}
                >
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        border: 'none',
                        background: index === currentImageIndex ? '#4f46e5' : 'rgba(255, 255, 255, 0.5)',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Project Details Section - Now scrollable on mobile */}
              <div
                style={{
                  flex: isMobile ? '1' : '0 0 45%',
                  padding: isMobile ? '1.5rem 1.5rem 3rem 1.5rem' : '2rem',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  WebkitOverflowScrolling: 'touch', // For smooth scrolling on iOS
                  maxHeight: isMobile ? '60vh' : '100%'
                }}
              >
                <h2
                  style={{
                    fontSize: isMobile ? '1.5rem' : '2rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {selectedProject.title}
                </h2>

                <p
                  style={{
                    color: '#d1d5db',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}
                >
                  {selectedProject.fullDescription}
                </p>

                <div
                  style={{
                    marginBottom: '2rem'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Code size={20} />
                    Technologies Used
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        style={{
                          background: 'rgba(79, 70, 229, 0.2)',
                          color: '#fff',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          border: '1px solid rgba(79, 70, 229, 0.5)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: '2rem'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Zap size={20} />
                    Key Features
                  </h3>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0
                    }}
                  >
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '0.5rem',
                          color: '#d1d5db'
                        }}
                      >
                        <span
                          style={{
                            color: '#4f46e5',
                            marginRight: '0.5rem',
                            fontWeight: 'bold'
                          }}
                        >
                          •
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    flexDirection: isMobile ? 'column' : 'row'
                  }}
                >
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '50px',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: 'linear-gradient(145deg, #4f46e5, #6366f1)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        textDecoration: 'none',
                        boxShadow: '5px 5px 10px #0a0b0e, -5px -5px 10px #1a1d24'
                      }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        textDecoration: 'none',
                        boxShadow: '5px 5px 10px #0a0b0e, -5px -5px 10px #1a1d24'
                      }}
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          section {
            animation: fadeIn 0.8s ease-out;
          }
          
          .project-card:hover .card-inner {
            transform: rotateY(180deg);
          }
          
          .card-title {
            position: relative;
            display: inline-block;
          }
          
          .card-title::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(to right, #4f46e5, #ec4899);
            transition: width 0.3s ease;
          }
          
          .project-card:hover .card-title::after {
            width: 100%;
          }
          
          @media (max-width: 768px) {
            .project-card .card-inner {
              transform: none !important;
            }
            
            .project-card .card-back {
              display: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ProjectsPage;