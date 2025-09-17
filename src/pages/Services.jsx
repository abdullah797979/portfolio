import React from 'react';
import {
  Code, ShoppingCart, Cpu, Palette, Database, Cloud, Server, Zap,
  Layers,
  Settings,
  Globe,
  LineChart
} from 'lucide-react';

// Neumorphic Service Card
const NeuServiceCard = ({ icon, heading, children, list }) => (
  <div className="neu-service-card">
    <div className="neu-service-heading">
      <span className="neu-icon">{icon}</span>
      <span className="neu-heading-gradient">{heading}</span>
    </div>
    <div className="neu-service-body neu-text-animate">{children}</div>
    {list && (
      <ul className="neu-service-list">
        {list.map((item, idx) => (
          <li key={idx} className="neu-text-animate">
            <span className="neu-bullet" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// All Services
const services = [
  {
    icon: <Code size={34} />,
    heading: 'Web Development',
    desc: `Custom web applications built with modern technologies like React, Node.js, and MongoDB. Responsive, fast, and scalable solutions tailored to your specific needs.`,
    list: [
      "Full-stack web applications",
      "Responsive design for all devices",
      "REST API development",
      "Progressive Web Apps (PWA)"
    ]
  },
  {
    icon: <ShoppingCart size={34} />,
    heading: 'eCommerce Solutions',
    desc: `Complete online store development with secure payment integration, inventory management, and marketing features to grow your business.`,
    list: [
      "WordPress/WooCommerce stores",
      "Shopify store customization",
      "Payment gateway integration",
      "Dropshipping automation"
    ]
  },
  {
    icon: <Cpu size={34} />,
    heading: 'AI Integration',
    desc: `Intelligent solutions powered by artificial intelligence to enhance user experience, automate processes, and provide data-driven insights.`,
    list: [
      "AI-powered chatbots",
      "Image recognition systems",
      "AI-assisted content generation",
      "Predictive analytics"
    ]
  },
  {
    icon: <Zap size={34} />,
    heading: 'Additional Services',
    desc: `Comprehensive digital solutions to enhance your online presence and optimize your business operations.`,
    list: [
      "SEO Optimization",
      "Website Maintenance",
      "Performance Optimization",
      "Technical Consulting",
      "API Integration"
    ]
  },
  {
  icon: <Layers size={34} />,
  heading: 'MERN Stack Development',
  desc: `End-to-end development of scalable applications using MongoDB, Express.js, React, and Node.js. Seamless workflows from frontend to backend.`,
  list: [
    "Custom full-stack applications",
    "Database schema design & CRUD operations",
    "RESTful API development",
    "Secure authentication & authorization"
  ]
},
{
  icon: <Settings size={34} />,
  heading: 'Workflow Automation',
  desc: `Boost productivity with automated workflows leveraging AI-assisted tools and modern development practices.`,
  list: [
    "Code acceleration with AI tools",
    "Automated testing & debugging",
    "Task automation scripts",
    "Continuous integration setups"
  ]
},
{
  icon: <Globe size={34} />,
  heading: 'WordPress & CMS Solutions',
  desc: `Professional WordPress site development with Elementor, plugin integration, and SEO-focused optimization.`,
  list: [
    "Custom WordPress websites",
    "Elementor-based landing pages",
    "Plugin integration & setup",
    "SEO and performance tuning"
  ]
},
{
  icon: <Database size={34} />,
  heading: 'Database Design & Management',
  desc: `Efficient database structures and secure management solutions with MongoDB.`,
  list: [
    "Database schema planning",
    "Optimized queries & indexing",
    "Data migration & backups",
    "Secure cloud deployment"
  ]
},
{
  icon: <LineChart size={34} />,
  heading: 'Analytics & Optimization',
  desc: `Monitor, measure, and optimize your website’s performance and user experience using modern analytics tools.`,
  list: [
    "Google Analytics integration",
    "SEO keyword strategy",
    "User behavior tracking",
    "Conversion optimization"
  ]
}

];

// Skill Groups for Progress Cards
const skillGroups = [
  {
    icon: <Palette size={24} />,
    heading: "Frontend Development",
    skills: [
      { label: "HTML5 & CSS3", percent: 95 },
      { label: "JavaScript (ES6+)", percent: 90 },
      { label: "React.js", percent: 88 },
      { label: "Responsive Design", percent: 92 }
    ]
  },
  {
    icon: <Server size={24} />,
    heading: "Backend Development",
    skills: [
      { label: "Node.js", percent: 85 },
      { label: "Express.js", percent: 87 },
      { label: "REST APIs", percent: 90 },
      { label: "Authentication", percent: 88 }
    ]
  },
  {
    icon: <Database size={24} />,
    heading: "Database & Tools",
    skills: [
      { label: "MongoDB", percent: 83 },
      { label: "MySQL", percent: 80 },
      { label: "Git & GitHub", percent: 90 },
      { label: "Deployment", percent: 85 }
    ]
  },
  {
    icon: <ShoppingCart size={24} />,
    heading: "eCommerce & CMS",
    skills: [
      { label: "WordPress/WooCommerce", percent: 92 },
      { label: "Shopify", percent: 85 },
      { label: "Payment Integration", percent: 88 },
      { label: "SEO Optimization", percent: 90 }
    ]
  }
];

const ServicesPage = () => (
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
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
          My Services
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
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      {/* Services Grid - Neumorphic Cards */}
      <div className="neu-services-grid">
        {services.map((s) => (
          <NeuServiceCard
            key={s.heading}
            icon={s.icon}
            heading={s.heading}
            list={s.list}
          >
            {s.desc}
          </NeuServiceCard>
        ))}
      </div>

      {/* Skills with Progress Bars */}
      <div>
        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '2rem',
            textAlign: 'center',
            background: 'linear-gradient(to right, #4f46e5, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Technical Skills
        </h2>

        <div className="neu-services-skills">
          {skillGroups.map((group) => (
            <div className="neu-skill-card" key={group.heading}>
              <div className="neu-skill-heading">
                {group.icon}
                <span className="neu-heading-gradient">{group.heading}</span>
              </div>
              <div className="neu-skill-list">
                {group.skills.map(skill => (
                  <div key={skill.label} className="neu-skill-row neu-text-animate">
                    <div className="neu-skill-label">
                      <span>{skill.label}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="neu-progress-bar">
                      <div className="neu-progress-fill" style={{ width: `${skill.percent}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

      .neu-services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2.2rem;
        margin-bottom: 4rem;
      }
      .neu-service-card {
        background: #151a22;
        border-radius: 20px;
        box-shadow:
          9px 9px 24px #0b0c10,
          -9px -9px 24px #232838;
        border: 1px solid rgba(255,255,255,0.08);
        padding: 2.2rem 1.5rem 2rem 1.5rem;
        transition: box-shadow 0.3s, transform 0.3s;
        will-change: transform, box-shadow;
        position: relative;
        overflow: hidden;
        opacity: 0;
        animation: fadeInCard 0.7s forwards cubic-bezier(.7,.2,.3,1);
      }
      .neu-service-card:hover, .neu-service-card:focus-within {
        box-shadow:
          2px 2px 12px #0b0c10,
          -2px -2px 18px #20253a,
          0 0 16px 2px #4f46e566;
        transform: translateY(-7px) scale(1.03) rotateZ(-0.5deg);
      }
      @keyframes fadeInCard {
        from { opacity: 0; transform: translateY(20px) scale(0.97);}
        to { opacity: 1; transform: translateY(0) scale(1);}
      }
      .neu-service-heading {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.35rem;
        font-weight: 700;
        margin-bottom: 1.2rem;
      }
      .neu-heading-gradient {
        background: linear-gradient(to right, #4f46e5, #ec4899);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        font-size: 1.2em;
      }
      .neu-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 62px;
        height: 62px;
        border-radius: 15px;
        background: linear-gradient(145deg, #181c26 60%, #23273b 100%);
        margin-right: 0;
        box-shadow: 2px 2px 14px #0b0c10;
      }
      .neu-service-body {
        color: #d1d5db;
        line-height: 1.62;
        margin-bottom: 1.45rem;
        font-size: 1.03rem;
        min-height: 54px;
      }
      .neu-service-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }
      .neu-bullet {
        display: inline-block;
        width: 8px; height: 8px;
        border-radius: 50%;
        background: linear-gradient(145deg, #4f46e5, #ec4899);
        margin-right: 0.7rem;
        vertical-align: middle;
      }
      .neu-service-list li {
        display: flex;
        align-items: center;
        font-size: 1.01rem;
        letter-spacing: 0.01em;
      }

      /* Skills Section */
      .neu-services-skills {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
        gap: 1.5rem;
      }
      .neu-skill-card {
        background: #151a22;
        border-radius: 18px;
        box-shadow:
          7px 7px 18px #0b0c10,
          -7px -7px 18px #232838;
        border: 1px solid rgba(255,255,255,0.08);
        padding: 1.5rem 1rem 1.2rem 1rem;
        margin-bottom: 0px;
        transition: box-shadow 0.3s;
        position: relative;
        overflow: hidden;
      }
      .neu-skill-heading {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        font-size: 1.15rem;
        font-weight: 600;
        margin-bottom: 1.3rem;
      }
      .neu-skill-list {
        display: flex;
        flex-direction: column;
        gap: 1.05rem;
      }
      .neu-skill-row {
        margin-bottom: 0;
      }
      .neu-skill-label {
        display: flex;
        justify-content: space-between;
        font-size: 1.02rem;
        margin-bottom: 0.4rem;
        color: #e7e8ea;
      }
      .neu-progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(255, 255, 255, 0.12);
        border-radius: 4px;
        overflow: hidden;
      }
      .neu-progress-fill {
        height: 100%;
        background: linear-gradient(to right, #4f46e5, #6366f1);
        border-radius: 4px;
        transition: width 1s cubic-bezier(.7,.2,.3,1);
        position: relative;
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

      /* Responsive */
      @media (max-width: 968px) {
        .neu-services-grid {
          grid-template-columns: 1fr;
        }
        .neu-services-skills {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media (max-width: 700px) {
        .neu-services-skills {
          grid-template-columns: 1fr;
        }
        .neu-service-card, .neu-skill-card {
          padding: 1.2rem 0.7rem;
        }
        .neu-service-heading { font-size: 1rem; }
      }
      @media (max-width: 540px) {
  .neu-service-card, .neu-skill-card {
    padding: 1.1rem 1.2rem !important;
  }
  .neu-service-heading, .neu-skill-heading {
    font-size: 1rem !important;
  }
  .neu-service-body, .neu-skill-label {
    font-size: 0.94rem !important;
  }
}
      `}
    </style>
  </section>
);

export default ServicesPage;