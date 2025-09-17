import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Linkedin, Github, Twitter, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const popupRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Initialize EmailJS with your public key
    emailjs.init("xua0sEn_dVEK-NFxZ");
    
    // Use sendForm instead of send for better form handling
    emailjs.sendForm('service_pp84n05', 'template_5hepbg3', form.current, {
      publicKey: "xua0sEn_dVEK-NFxZ",
    })
    .then((result) => {
        console.log('Email successfully sent!', result.text);
        setShowSuccessPopup(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSending(false);
    }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send the message, please try again.');
        setIsSending(false);
    });
  };

  // Scroll to popup when it appears
  useEffect(() => {
    if (showSuccessPopup && popupRef.current) {
      popupRef.current.scrollIntoView({ behavior: 'smooth' });
      
      // Auto-hide the popup after 5 seconds
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);
useEffect(() => {
    if (showSuccessPopup && popupRef.current) {
      const headerOffset = 80; // Approximate height of your header + some padding
      const elementPosition = popupRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Auto-hide the popup after 5 seconds
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);
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
      {/* Success Popup */}
      {showSuccessPopup && (
        <div 
          ref={popupRef}
          className="success-popup"
          style={{
            background: '#151a22',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '2rem',
            textAlign: 'center',
            boxShadow: '9px 9px 24px #0b0c10, -9px -9px 24px #232838',
            border: '1px solid rgba(255,255,255,0.08)',
            animation: 'fadeIn 0.5s ease'
          }}
        >
          <CheckCircle size={48} color="#4f46e5" style={{ marginBottom: '1rem' }} />
          <h3 style={{ 
            marginBottom: '0.5rem',
            background: 'linear-gradient(to right, #4f46e5, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Message Sent Successfully!
          </h3>
          <p style={{ color: '#d1d5db', margin: 0 }}>
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </div>
      )}

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
            Get In Touch
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
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}
        >
          {/* Contact Information */}
          <div>
            <h2
              style={{
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              <MessageSquare size={24} />
              Let's Talk
            </h2>
            <p
              style={{
                color: '#d1d5db',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}
            >
              I'm currently available for freelance work and full-time opportunities. If you have a project that you want to get started or think you need my help with something, then get in touch.
            </p>

            {/* Contact Details - Neumorphic Cards */}
            <div className="neumorph-contact-grid">
              <div className="neumorph-card neumorph-animate">
                <div className="neumorph-icon-wrapper">
                  <Mail size={24} />
                </div>
                <h3 className="neumorph-contact-title">Email</h3>
                <p className="neumorph-contact-text">abdullahawan7979@gmail.com</p>
              </div>

              <div className="neumorph-card neumorph-animate" style={{ animationDelay: '0.1s' }}>
                <div className="neumorph-icon-wrapper">
                  <Phone size={24} />
                </div>
                <h3 className="neumorph-contact-title">Phone</h3>
                <p className="neumorph-contact-text">(+92) 3177600992</p>
              </div>

              <div className="neumorph-card neumorph-animate" style={{ animationDelay: '0.2s' }}>
                <div className="neumorph-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <h3 className="neumorph-contact-title">Location</h3>
                <p className="neumorph-contact-text">Gujranwala, Pakistan</p>
              </div>

              <div className="neumorph-card neumorph-animate" style={{ animationDelay: '0.3s' }}>
                <div className="neumorph-icon-wrapper">
                  <Clock size={24} />
                </div>
                <h3 className="neumorph-contact-title">Availability</h3>
                <p className="neumorph-contact-text">Available for new projects</p>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '2rem' }}>
              <h3
                style={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Follow Me
              </h3>
              <div className="neumorph-social-links">
                <a
                  href="https://linkedin.com/in/abdullahafzaal79/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neumorph-social-link"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/abdullah797979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neumorph-social-link"
                >
                  <Github size={20} />
                </a>
                
                
                <a
                  href="mailto:abdullahawan7979@gmail.com"
                  className="neumorph-social-link"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2
              style={{
                fontSize: '1.8rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(to right, #4f46e5, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              <Send size={24} />
              Send a Message
            </h2>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="neumorph-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="neumorph-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="neumorph-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="neumorph-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="neumorph-textarea"
                ></textarea>
              </div>
              <button
                type="submit"
                className="neumorph-button"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
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

        /* Success Popup */
        .success-popup {
          animation: fadeIn 0.5s ease;
        }

        /* Contact Cards */
        .neumorph-contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .neumorph-card {
          background: #151a22;
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow:
            9px 9px 24px #0b0c10,
            -9px -9px 24px #232838;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 180px;
        }

        .neumorph-card:hover {
          box-shadow:
            2px 2px 12px #0b0c10,
            -2px -2px 18px #20253a,
            0 0 16px 2px #4f46e566;
          transform: translateY(-5px);
        }

        .neumorph-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-bottom: 1rem;
          background: linear-gradient(145deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2));
          color: #4f46e5;
        }

        .neumorph-contact-title {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(to right, #4f46e5, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 600;
        }

        .neumorph-contact-text {
          color: '#d1d5db';
          margin: 0;
          font-size: 0.95rem;
        }

        /* Social Links */
        .neumorph-social-links {
          display: flex;
          gap: 1rem;
        }

        .neumorph-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: #151a22;
          color: '#d1d5db';
          transition: all 0.3s ease;
          box-shadow:
            5px 5px 10px #0b0c10,
            -5px -5px 10px #232838;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .neumorph-social-link:hover {
          box-shadow:
            2px 2px 5px #0b0c10,
            -2px -2px 5px #232838,
            0 0 10px 1px #4f46e566;
          transform: translateY(-3px);
          color: '#fff';
        }

        /* Form */
        .neumorph-form {
          background: #151a22;
          border-radius: 20px;
          padding: 2rem;
          box-shadow:
            9px 9px 24px #0b0c10,
            -9px -9px 24px #232838;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: '#d1d5db';
          font-size: 0.95rem;
        }

        .neumorph-input, .neumorph-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255, 255, 255, 0.05);
          color: '#fff';
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: inset 3px 3px 6px #0b0c10, inset -3px -3px 6px #232838;
        }

        .neumorph-input:focus, .neumorph-textarea:focus {
          outline: none;
          box-shadow: inset 5px 5px 10px #0b0c10, inset -5px -5px 10px #232838, 0 0 10px 1px #4f46e566;
          border-color: rgba(79, 70, 229, 0.5);
        }

        .neumorph-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .neumorph-button {
          padding: 0.75rem 2rem;
          border-radius: 12px;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          background: linear-gradient(145deg, #4f46e5, #6366f1);
          color: '#fff';
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4), 5px 5px 10px #0b0c10, -5px -5px 10px #232838;
        }

        .neumorph-button:hover:not(:disabled) {
          box-shadow: 0 6px 20px rgba(79, 70, 229, 0.6), 2px 2px 5px #0b0c10, -2px -2px 5px #232838;
          transform: translateY(-2px);
        }

        .neumorph-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Animations */
        .neumorph-animate {
          opacity: 0;
          animation: fadeInCard 0.7s forwards cubic-bezier(.7,.2,.3,1);
        }

        @keyframes fadeInCard {
          from { opacity: 0; transform: translateY(20px) scale(0.96);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .neumorph-contact-grid {
            grid-template-columns: 1fr;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .neumorph-social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 2rem 1rem;
          }
          
          .neumorph-card {
            padding: 1rem;
            min-height: 160px;
          }
          
          .neumorph-form {
            padding: 1.5rem;
          }
        }
        `}
      </style>
    </section>
  );
};

export default ContactPage;