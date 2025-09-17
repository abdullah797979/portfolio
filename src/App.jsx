import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from "./pages/About";
import ResumePage from "./pages/Resume";
import ServicesPage from "./pages/Services";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import { Footer, Header } from "./components/Hf";
import HomePage from "./pages/Home";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto'; // Re-enable scrolling after preloader
    }, 4000); // 4 seconds for demonstration

    // Disable scrolling during preloader
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Ensure scrolling is re-enabled
    };
  }, []);

  return (
    <Router>
      {isLoading && <Preloader />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;