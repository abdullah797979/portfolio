import {
  Mail, MapPin, Calendar, Award, BookOpen, Code2, Database, ShoppingCart,
  Cpu, Cloud, Palette, Server
} from 'lucide-react';

const skillGroups = [
  {
    icon: <Palette size={24} />,
    title: 'Frontend',
    skills: [
      'HTML5 & CSS3',
      'JavaScript (ES6+)',
      'React.js (Hooks)',
      'Responsive Design',
    ],
  },
  {
    icon: <Server size={24} />,
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Authentication',
    ],
  },
  {
    icon: <Database size={24} />,
    title: 'Database',
    skills: [
      'MongoDB',
      'CRUD Operations',
      'Schema Design',
      'MySQL',
    ],
  },
  {
    icon: <ShoppingCart size={24} />,
    title: 'eCommerce',
    skills: [
      'WordPress/WooCommerce',
      'Shopify',
      'Payment Integration',
      'Dropshipping',
    ],
  },
  {
    icon: <Cpu size={24} />,
    title: 'AI & Tools',
    skills: [
      'AI Integration',
      'ChatGPT/Copilot',
      'Git & GitHub',
      'Deployment',
    ],
  },
  {
    icon: <Cloud size={24} />,
    title: 'Additional',
    skills: [
      'SEO Optimization',
      'Google Analytics',
      'Project Management',
      'Problem Solving',
    ],
  },
];

const AboutPage = () => {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0D0F13 0%, #151920 100%)',
        color: '#fff',
        padding: '4rem 2rem',
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
            marginBottom: '4rem'
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
            About Me
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
            Get to know more about my journey, skills, and what drives me as a developer
          </p>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
            alignItems: 'flex-start'
          }}
        >
          {/* Left Column - Image & Personal Info */}
          <div
            style={{
              flex: '1 1 350px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '450px',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                marginBottom: '2rem'
              }}
            >
              <img
                src="/pro.jpg"
                alt="Abdullah Afzaal"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(45deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2))',
                  mixBlendMode: 'soft-light'
                }}
              ></div>
            </div>

            {/* Personal Info & Education Cards - Grouped */}
            <div className="neumorph-skill-grid" style={{width: '100%', maxWidth: '400px', gap: '2rem'}}>
                {/* Neumorphic Personal Info Card */}
                <div className="neumorph-card neumorph-animate" style={{animationDelay: '0s'}}>
                  <h3 className="neumorph-skill-title"> {/* Changed to skill-title for consistent styling */}
                    <Award size={24} /> 
                    <span className="neumorph-text-animate" style={{
                      background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>Personal Info</span>
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div className="neumorph-row">
                      <MapPin size={20} color="#4f46e5" />
                      <span className="neumorph-text-animate">Gujranwala, Pakistan</span>
                    </div>
                    <div className="neumorph-row">
                      <Calendar size={20} color="#4f46e5" />
                      <span className="neumorph-text-animate">Born on May 3, 2003</span>
                    </div>
                    <div className="neumorph-row">
                      <Mail size={20} color="#4f46e5" />
                      <span className="neumorph-text-animate">abdullahawan7979@gmail.com</span>
                    </div>
                  </div>
                </div>
                {/* Neumorphic Education Card */}
                <div className="neumorph-card neumorph-animate" style={{ animationDelay: '0.1s' }}> {/* Added animation delay */}
                  <h3 className="neumorph-skill-title"> {/* Changed to skill-title for consistent styling */}
                    <BookOpen size={24} /> 
                    <span className="neumorph-text-animate" style={{
                      background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>Education</span>
                  </h3>
                  <h4 className="neumorph-text-animate" style={{ fontSize: '1.1rem', margin: '0.5rem 0 0.3rem 0' }}>BS Information Technology</h4>
                  <div className="neumorph-text-animate" style={{ color: '#d1d5db' }}>University of Gujrat, <span className="neumorph-text-animate" style={{
                    background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Pakistan</span></div>
                  <div className="neumorph-row" style={{ margin: '0.5rem 0' }}>
                    <Calendar size={16} />
                    <span className="neumorph-text-animate">2021 - 2025 | GPA: 2.78/4.0</span>
                  </div>
                  <div className="neumorph-text-animate" style={{ color: '#d1d5db', fontSize: '0.96rem', marginTop: '1rem' }}> {/* Added margin-top for spacing */}
                    <span className="neumorph-text-animate" style={{
                    background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Relevant coursework:</span><br/>
                    
                    <ul className="neumorph-skill-list" style={{marginTop: '0.5rem'}}> {/* Added margin-top to separate from title */}
                      <li>Programming Fundamentals</li>
                      <li>Object-Oriented Programming</li>
                      <li>Data Structures</li>
                      <li>Web Technologies</li>
                      <li>Database Systems</li>
                      <li>Artificial Intelligence</li>
                      <li>Software Engineering</li>
                    </ul>
                  </div>
                </div>
            </div> {/* End Personal Info & Education Cards - Grouped */}
          </div>

          {/* Right Column - Bio & Skills */}
          <div
            style={{
              flex: '2 1 600px'
            }}
          >
            {/* Bio Section */}
            <div
              style={{
                marginBottom: '3rem'
              }}
            >
              <h2
                style={{
                  fontSize: '2rem',
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                My Journey
              </h2>
              <p
                style={{
                  lineHeight: 1.7,
                  color: '#d1d5db',
                  marginBottom: '1.5rem'
                }}
              >
                I'm a passionate MERN Stack Developer and eCommerce Specialist with experience in full-stack app development, AI integration, and online store customization. My journey in technology started during my studies at the University of Gujrat, where I developed a strong foundation in information technology.
              </p>
              <p
                style={{
                  lineHeight: 1.7,
                  color: '#d1d5db',
                  marginBottom: '1.5rem'
                }}
              >
                I've built and deployed several projects including an AI-powered eCommerce platform (Green Garden), a tools directory with 500+ tools (Toologi), and a WordPress dropshipping store (SDP). I'm skilled in React, Node.js, MongoDB, WordPress, Shopify, and AI-assisted development.
              </p>
              <p
                style={{
                  lineHeight: 1.7,
                  color: '#d1d5db'
                }}
              >
                I'm passionate about creating scalable, user-friendly applications and eager to contribute to innovative projects while advancing my expertise in cutting-edge technologies.
              </p>
            </div>

            {/* Skills Section - Neumorphism Animated Cards */}
            <div
              style={{
                marginBottom: '3rem'
              }}
            >
              <h2
                style={{
                  fontSize: '2rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                <Code2 size={24} />
                Technical Skills
              </h2>

              <div className="neumorph-skill-grid">
                {skillGroups.map((group, idx) => (
                  <div className="neumorph-card neumorph-animate" key={group.title} style={{ animationDelay: `${idx * 0.1}s` }}>
                    <h3 className="neumorph-skill-title">
                      {group.icon}
                      <span 
                        className="neumorph-text-animate" 
                        style={{
                          background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        {group.title}
                      </span>
                    </h3>
                    <ul className="neumorph-skill-list">
                      {group.skills.map((s, i) => (
                        <li className="neumorph-text-animate" key={s} style={{ animationDelay: `${0.15 + i * 0.05}s` }}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Neumorphism and Animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }

        section {
          animation: fadeIn 0.8s cubic-bezier(.7,.2,.3,1) both;
        }

        .neumorph-card {
          background: #151a22;
          border-radius: 20px;
          box-shadow:
            9px 9px 24px #0b0c10,
            -9px -9px 24px #232838;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 2rem 1.5rem;
          margin-bottom: 0px;
          transition: box-shadow 0.3s, transform 0.3s;
          will-change: transform, box-shadow;
          position: relative;
          overflow: hidden;
          
        }
        .neumorph-card:hover, .neumorph-card:focus-within {
          box-shadow:
            2px 2px 12px #0b0c10,
            -2px -2px 18px #20253a,
            0 0 16px 2px #4f46e566;
          transform: translateY(-4px) scale(1.025) rotateZ(-0.5deg);
        }
        .neumorph-animate {
          opacity: 0;
          animation: fadeInCard 0.7s forwards cubic-bezier(.7,.2,.3,1);
        }
        .neumorph-card:nth-child(1) { animation-delay: 0.07s;}
        .neumorph-card:nth-child(2) { animation-delay: 0.15s;}
        .neumorph-card:nth-child(3) { animation-delay: 0.25s;}

        @keyframes fadeInCard {
          from { opacity: 0; transform: translateY(20px) scale(0.96);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }

        .neumorph-title, .neumorph-skill-title {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 1.4rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 1.3rem;
          letter-spacing: 0.01em;
          opacity: 0.92;
        }
        .neumorph-skill-title { font-size: 1.15rem; margin-bottom: 1rem; }
        .neumorph-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.1rem;
        }

        .neumorph-skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 2.5rem;
        }
        .neumorph-skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .neumorph-skill-list li {
          position: relative;
          padding-left: 1.2rem; /* space for custom bullet */
          color: #d1d5db; /* text color */
        }

        .neumorph-skill-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.3rem; /* aligns bullet vertically with text */
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          background: linear-gradient(to right, #4f46e5, #ec4899);
        }

        /* Animated text */
        .neumorph-text-animate {
          opacity: 0;
          animation: textFadeIn 1s forwards cubic-bezier(.7,.2,.3,1);
        }
        @keyframes textFadeIn {
          from { opacity: 0; transform: translateY(12px);}
          to { opacity: 1; transform: translateY(0);}
        }
        /* Animate each child separately */
        .neumorph-card .neumorph-text-animate { animation-delay: 0.13s; }
        .neumorph-card .neumorph-text-animate:nth-child(2) { animation-delay: 0.20s; }
        .neumorph-card .neumorph-text-animate:nth-child(3) { animation-delay: 0.27s; }
        .neumorph-card .neumorph-text-animate:nth-child(4) { animation-delay: 0.34s; }
        .neumorph-card .neumorph-text-animate:nth-child(5) { animation-delay: 0.41s; }

        /* Responsive */
        @media (max-width: 968px) {
          .neumorph-skill-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 700px) {
          .neumorph-skill-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 540px) {
          .neumorph-card {
            padding: 1.4rem 0.8rem;
          }
        }
        `}
      </style>
    </section>
  );
};

export default AboutPage;