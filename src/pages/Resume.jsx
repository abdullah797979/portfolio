
import {
  Download, Mail, MapPin, Phone, Globe, Calendar, Award, BookOpen, Code2,
  ExternalLink
} from 'lucide-react';

// Advanced Neumorphic Card Component
const NeuCard = ({ icon, heading, headingHighlight, children, style = {}, className = "" }) => (
  <div className={`neu-card neu-animate ${className}`} style={style}>
    <div className="neu-card-heading">
      {icon}
      <span className="neu-heading-gradient">{headingHighlight || heading}</span>
      {headingHighlight && <span className="neu-heading-fade">&nbsp;{heading.replace(headingHighlight, "")}</span>}
    </div>
    {children}
  </div>
);

const ResumePage = () => {
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
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            My Resume
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
            A detailed overview of my experience, education, and skills
          </p>
          <a 
  href="/CV.pdf" 
  download 
  style={{ textDecoration: "none", display: "inline-block" }}
>
  <button
    style={{
      padding: '0.75rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: 'linear-gradient(145deg, #4f46e5, #6366f1)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
      margin: '2rem auto 0'
    }}
    onMouseEnter={e => {
      e.target.style.boxShadow = '0 6px 20px rgba(79, 70, 229, 0.6)';
      e.target.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={e => {
      e.target.style.boxShadow = '0 4px 14px rgba(79, 70, 229, 0.4)';
      e.target.style.transform = 'translateY(0)';
    }}
  >
    <Download size={18} />
    Download PDF
  </button>
</a>

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
          {/* Left Column - Education & Work Experience */}
          <div style={{ flex: '2 1 700px' }}>
            {/* Education */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="neu-section-title">
                <BookOpen size={24} />
                <span className="neu-heading-gradient">Education</span>
              </h2>
              <div className="neu-card-list">
                {/* BS */}
                <NeuCard
                  icon={<BookOpen size={20} />}
                  heading="BS IT"
                  headingHighlight="BS"
                >
                  <div className="neu-card-row">
                    <span className="neu-text-animate">University of Gujrat, Pakistan</span>
                    <span className="neu-text-animate neu-card-date"><Calendar size={16} />2021 - 2025</span>
                  </div>
                  <div className="neu-text-animate neu-card-detail">GPA: 2.78/4.0 | EQF level 6</div>
                  <div className="neu-text-animate neu-card-detail" style={{ fontSize: '0.96rem', color: '#d1d5db' }}>
                    Relevant coursework: Programming Fundamentals, Object-Oriented Programming, Data Structures and Algorithms, Information Security, Software Engineering, Web Technologies, Database Systems, OS, Mobile App Dev, AI
                  </div>
                </NeuCard>

                {/* Inter */}
                <NeuCard
                  icon={<BookOpen size={20} />}
                  heading="Intermediate (ICS)"
                  headingHighlight="Intermediate"
                >
                  <div className="neu-card-row">
                    <span className="neu-text-animate">Govt Degree College Qila Didar Singh, Gujranwala</span>
                    <span className="neu-text-animate neu-card-date"><Calendar size={16} />2019 - 2021</span>
                  </div>
                  <div className="neu-text-animate neu-card-detail">Grade: B | 681/1100</div>
                  <div className="neu-text-animate neu-card-detail" style={{ fontSize: '0.96rem', color: '#d1d5db' }}>
                    Major Subjects: Computer Science, Mathematics, Physics
                  </div>
                </NeuCard>

                {/* Matric */}
                <NeuCard
                  icon={<BookOpen size={20} />}
                  heading="Matriculation in Science"
                  headingHighlight="Matriculation"
                >
                  <div className="neu-card-row">
                    <span className="neu-text-animate">Heaven Public School Qila Didar Singh, Gujranwala</span>
                    <span className="neu-text-animate neu-card-date"><Calendar size={16} />2017 - 2019</span>
                  </div>
                  <div className="neu-text-animate neu-card-detail">Grade: A | 813/1100</div>
                  <div className="neu-text-animate neu-card-detail" style={{ fontSize: '0.96rem', color: '#d1d5db' }}>
                    Major Subjects: Computer Science, Mathematics, Physics, Chemistry, Biology
                  </div>
                </NeuCard>
              </div>
            </div>

            {/* Work Experience */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 className="neu-section-title">
                <Award size={24} />
                <span className="neu-heading-gradient">Work Experience</span>
              </h2>
              <div className="neu-card-list">
                {/* Experience 1 */}
                <NeuCard
                  icon={<Award size={20} />}
                  heading="Founder & Developer - Toologi"
                  headingHighlight="Toologi"
                >
                  <div className="neu-card-row">
                    <span className="neu-text-animate">Toologi - Online Tools Directory</span>
                    <span className="neu-text-animate neu-card-date"><Calendar size={16} />Feb 2025 - Present</span>
                  </div>
                  <ul className="neu-card-list-ul">
                    <li className="neu-text-animate">Designed, developed, and managed a WordPress-based online tools directory with 500+ tools</li>
                    <li className="neu-text-animate">Integrated plugins, optimized site architecture, and implemented SEO strategies</li>
                    <li className="neu-text-animate">Utilized AI-assisted tools (ChatGPT, Copilot) for workflow automation and content generation</li>
                    <li className="neu-text-animate">Monitored site analytics and user feedback to improve performance and UX</li>
                  </ul>
                  <a
                    href="https://toologi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-link"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                </NeuCard>

                {/* Experience 2 */}
                <NeuCard
                  icon={<Award size={20} />}
                  heading="Project Manager & Developer - Green Garden"
                  headingHighlight="Green Garden"
                >
                  <div className="neu-card-row">
                    <span className="neu-text-animate">Green Garden - AI-Powered E-Commerce Platform</span>
                    <span className="neu-text-animate neu-card-date"><Calendar size={16} />Dec 2024 - Apr 2025</span>
                  </div>
                  <ul className="neu-card-list-ul">
                    <li className="neu-text-animate">Designed and deployed a full-stack MERN eCommerce application</li>
                    <li className="neu-text-animate">Integrated user authentication, shopping cart, secure checkout, and booking system</li>
                    <li className="neu-text-animate">Implemented AI modules: CNN-based plant recognition and chatbot assistant</li>
                    <li className="neu-text-animate">Used GitHub for version control and managed project delivery timelines</li>
                  </ul>
                </NeuCard>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.7rem' }}>
                <button
                  className="see-all-btn"
                  style={{
                    background: 'linear-gradient(145deg, #4f46e5, #6366f1)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.75rem 2.2rem',
                    fontWeight: 600,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(79, 70, 229, 0.28)',
                    transition: 'all 0.22s',
                  }}
                  onMouseEnter={e => {
                    e.target.style.boxShadow = '0 6px 20px rgba(79, 70, 229, 0.5)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.boxShadow = '0 4px 14px rgba(79, 70, 229, 0.28)';
                    e.target.style.transform = 'translateY(0)';
                    }}
                    onClick={() => window.location.href = "/projects"}
                  >
                    See All
                  </button>
                  </div>
                </div>
                </div>

                {/* Right Column - Skills & Contact */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Contact Info */}
            <NeuCard
              icon={<Mail size={20} />}
              heading="Contact Info"
              headingHighlight="Contact"
              className="neu-card-right"
            >
              <div className="neu-card-row">
                <Mail size={18} color="#4f46e5" />
                <span className="neu-text-animate">abdullahawan7979@gmail.com</span>
              </div>
              <div className="neu-card-row">
                <Phone size={18} color="#4f46e5" />
                <span className="neu-text-animate">(+92) 3177600992</span>
              </div>
              <div className="neu-card-row">
                <MapPin size={18} color="#4f46e5" />
                <span className="neu-text-animate">Gujranwala, Pakistan</span>
              </div>
              {/* <div className="neu-card-row">
                <Globe size={18} color="#4f46e5" />
                <span className="neu-text-animate">https://toologi.com/</span>
              </div> */}
            </NeuCard>

            {/* Skills */}
            <NeuCard
              icon={<Code2 size={20} />}
              heading="Technical Skills"
              headingHighlight="Technical"
              className="neu-card-right"
            >
              <div className="neu-skill-list">
                <div>
                  <span className="neu-skill-category">Frontend</span>
                  <div className="neu-skill-tags">
                    <span className="neu-skill-tag neu-text-animate">HTML5</span>
                    <span className="neu-skill-tag neu-text-animate">CSS3</span>
                    <span className="neu-skill-tag neu-text-animate">JavaScript (ES6+)</span>
                    <span className="neu-skill-tag neu-text-animate">React.js</span>
                  </div>
                </div>
                <div>
                  <span className="neu-skill-category">Backend</span>
                  <div className="neu-skill-tags">
                    <span className="neu-skill-tag neu-text-animate">Node.js</span>
                    <span className="neu-skill-tag neu-text-animate">Express.js</span>
                    <span className="neu-skill-tag neu-text-animate">REST APIs</span>
                  </div>
                </div>
                <div>
                  <span className="neu-skill-category">Database</span>
                  <div className="neu-skill-tags">
                    <span className="neu-skill-tag neu-text-animate">MongoDB</span>
                    <span className="neu-skill-tag neu-text-animate">MySQL</span>
                  </div>
                </div>
                <div>
                  <span className="neu-skill-category">eCommerce</span>
                  <div className="neu-skill-tags">
                    <span className="neu-skill-tag neu-text-animate">WordPress</span>
                    <span className="neu-skill-tag neu-text-animate">WooCommerce</span>
                    <span className="neu-skill-tag neu-text-animate">Shopify</span>
                    <span className="neu-skill-tag neu-text-animate">Payment Integration</span>
                  </div>
                </div>
                <div>
                  <span className="neu-skill-category">Tools</span>
                  <div className="neu-skill-tags">
                    <span className="neu-skill-tag neu-text-animate">Git & GitHub</span>
                    <span className="neu-skill-tag neu-text-animate">AI Tools (ChatGPT, Copilot)</span>
                    <span className="neu-skill-tag neu-text-animate">Google Analytics</span>
                    <span className="neu-skill-tag neu-text-animate">SEO</span>
                  </div>
                </div>
              </div>
            </NeuCard>

            {/* Languages */}
            <NeuCard
              icon={<Globe size={20} />}
              heading="Languages"
              headingHighlight="Languages"
              className="neu-card-right"
            >
              <div className="neu-lang-row">
                <span className="neu-text-animate">Urdu</span>
                <span className="neu-text-animate" style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Native</span>
                <div className="neu-progress-bar"><div className="neu-progress-fill" style={{ width: '100%' }}></div></div>
              </div>
              <div className="neu-lang-row">
                <span className="neu-text-animate">Punjabi</span>
                <span className="neu-text-animate" style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Native</span>
                <div className="neu-progress-bar"><div className="neu-progress-fill" style={{ width: '100%' }}></div></div>
              </div>
              <div className="neu-lang-row">
                <span className="neu-text-animate">English</span>
                <span className="neu-text-animate" style={{ color: '#d1d5db', fontSize: '0.9rem' }}>B2 (Independent)</span>
                <div className="neu-progress-bar"><div className="neu-progress-fill" style={{ width: '75%' }}></div></div>
              </div>
            </NeuCard>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        section { animation: fadeIn 0.8s cubic-bezier(.7,.2,.3,1) both; }

        .neu-section-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(79, 70, 229, 0.5);
          font-weight: 700;
        }
        .neu-heading-gradient {
          background: linear-gradient(to right, #4f46e5, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }
        .neu-heading-fade {
          color: #fff;
          opacity: 0.85;
        }
        .neu-card-list {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }
        .neu-card-list-ul {
          list-style: none;
          margin: 0.6rem 0 0 0;
          padding: 0;
        }
        .neu-card-list-ul li {
          margin-bottom: 0.2rem;
        }

        .neu-card {
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
          opacity: 0;
          animation: neuFadeInCard 0.7s forwards cubic-bezier(.7,.2,.3,1);
        }
        .neu-animate { opacity: 0; }
        .neu-animate:nth-child(1) { animation-delay: 0.07s; }
        .neu-animate:nth-child(2) { animation-delay: 0.13s; }
        .neu-animate:nth-child(3) { animation-delay: 0.19s; }
        .neu-animate:nth-child(4) { animation-delay: 0.25s; }
        .neu-animate:nth-child(5) { animation-delay: 0.31s; }

        @keyframes neuFadeInCard {
          from { opacity: 0; transform: translateY(20px) scale(0.96);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }

        .neu-card:hover, .neu-card:focus-within {
          box-shadow:
            2px 2px 12px #0b0c10,
            -2px -2px 18px #20253a,
            0 0 16px 2px #4f46e566;
          transform: translateY(-4px) scale(1.025) rotateZ(-0.5deg);
        }
        .neu-card-heading {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 1.19rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          letter-spacing: 0.01em;
        }
        .neu-card-row {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin-bottom: 0.6rem;
        }
        .neu-card-date {
          color: #d1d5db;
          font-size: 0.93rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .neu-card-detail {
          margin-bottom: 0.3rem;
        }
        .neu-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #4f46e5;
          text-decoration: none;
          margin-top: 1rem;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .neu-link:hover { color: #ec4899; }

        .see-all-btn {
          margin-top: 0.7rem;
        }

        /* Skills */
        .neu-skill-list {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .neu-skill-category {
          color: #4f46e5;
          font-size: 1.02rem;
          font-weight: 500;
          margin-bottom: 0.13rem;
          display: inline-block;
        }
        .neu-skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .neu-skill-tag {
          background: #171c27;
          color: #fff;
          padding: 0.33rem 0.95rem;
          border-radius: 18px;
          font-size: 0.92rem;
          border: 1px solid rgba(79, 70, 229, 0.18);
          transition: background 0.22s;
        }
        .neu-skill-tag:hover { background: #232a3a; }

        /* Languages */
        .neu-lang-row {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin-bottom: 0.8rem;
          flex-wrap: wrap;
        }
        .neu-progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.11);
          border-radius: 3px;
          overflow: hidden;
          margin-left: 0.5rem;
          flex: 1 1 60px;
        }
        .neu-progress-fill {
          height: 100%;
          background: linear-gradient(to right, #4f46e5, #6366f1);
          border-radius: 3px;
          transition: width 1s ease;
        }

        /* Animated text */
        .neu-text-animate {
          opacity: 0;
          animation: neuTextFadeIn 1.1s forwards cubic-bezier(.7,.2,.3,1);
        }
        @keyframes neuTextFadeIn {
          from { opacity: 0; transform: translateY(12px);}
          to { opacity: 1; transform: translateY(0);}
        }

        .neu-card .neu-text-animate { animation-delay: 0.18s; }
        .neu-card .neu-text-animate:nth-child(2) { animation-delay: 0.22s; }
        .neu-card .neu-text-animate:nth-child(3) { animation-delay: 0.27s; }
        .neu-card .neu-text-animate:nth-child(4) { animation-delay: 0.33s; }
        .neu-card .neu-text-animate:nth-child(5) { animation-delay: 0.39s; }

        /* Responsive */
        @media (max-width: 1100px) {
          .neu-section-title { font-size: 1.4rem; }
        }
        @media (max-width: 968px) {
          .neu-card-list {
            gap: 1.1rem;
          }
          .see-all-btn {
            width: 100%;
            padding: 0.7rem 0;
            font-size: 1rem;
          }
        }
        @media (max-width: 700px) {
          .neu-card, .neu-card-right {
            padding: 1.2rem 0.8rem;
          }
          .neu-section-title { font-size: 1.05rem; }
        }
        @media (max-width: 670px) {
          .see-all-btn { font-size: 0.98rem; }
        }
        @media (max-width: 540px) {
          section { padding: 2.3rem 0.3rem; }
          .neu-card, .neu-card-right {
            padding: 1rem 1.2rem;
          }
          .neu-section-title { font-size: 1rem; }
          .see-all-btn { font-size: 0.93rem; }
        }
        `}
      </style>
    </section>
  );
};

export default ResumePage;