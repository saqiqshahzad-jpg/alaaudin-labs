import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Bot, Cpu, Zap, Mail, ArrowRight, Code, CheckCircle } from 'lucide-react';
import './App.css';

const App = () => {
  // 🖱️ CUSTOM CURSOR LOGIC
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // 📜 SCROLL ANIMATIONS
  const { scrollYProgress } = useScroll();

  return (
    <div className="elite-wrapper">
      {/* 🟢 CUSTOM GLOWING CURSOR */}
      <motion.div 
        className="cursor-dot"
        animate={{ x: mousePosition.x - 5, y: mousePosition.y - 5, scale: isHovering ? 2.5 : 1 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div 
        className="cursor-outline"
        animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20, scale: isHovering ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />

      {/* 🌌 BACKGROUND GLOWS */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <div className="main-container">
        
        {/* 🚀 1. HERO SECTION */}
        <section className="hero-section">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}
            className="hero-content"
          >
            <div className="badge-glass">
              <span className="live-dot"></span> Self-Employed AI Specialist
            </div>
            <h1 className="glitch-text" data-text="Muhammad Saqib">Muhammad Saqib</h1>
            <h2 className="gradient-text">Building Intelligent Systems That Drive Real Results.</h2>
            <p className="hero-desc">
              I design and deploy AI-powered automation solutions, helping businesses streamline operations, reduce manual effort, and unlock new efficiencies.
            </p>
            <div className="hero-buttons">
              <a 
                href="mailto:alaaudin.ai@gmail.com" 
                className="btn-primary"
                onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
              >
                Let's Automate <ArrowRight size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-saqib-aichatbotdeveloper" 
                target="_blank" rel="noreferrer" 
                className="btn-secondary"
                onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
              >
                View LinkedIn
              </a>
            </div>
          </motion.div>
        </section>

        {/* 🍱 2. BENTO GRID SERVICES */}
        <section className="services-section">
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="section-header"
          >
            <h2>AI Automation Expertise</h2>
            <p>Specializing in end-to-end workflows powered by artificial intelligence.</p>
          </motion.div>

          <div className="bento-master-grid">
            
            {/* Bento Box 1 */}
            <motion.div 
              className="bento-box glass-card box-large"
              whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            >
              <div className="icon-wrapper green-glow"><Bot size={36} /></div>
              <h3>AI Agents</h3>
              <p>Autonomous agents that handle tasks, make decisions, and integrate seamlessly with your existing tools.</p>
              <div className="tech-stack"><span>Custom Bots</span><span>Decision Logic</span></div>
            </motion.div>

            {/* Bento Box 2 */}
            <motion.div 
              className="bento-box glass-card box-tall"
              whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            >
              <div className="icon-wrapper blue-glow"><Zap size={36} /></div>
              <h3>Automation Flows</h3>
              <p>No-code and low-code workflows that completely eliminate repetitive manual work.</p>
              <ul className="feature-list">
                <li><CheckCircle size={16}/> Zapier / Make</li>
                <li><CheckCircle size={16}/> API Connections</li>
                <li><CheckCircle size={16}/> Data Sync</li>
              </ul>
            </motion.div>

            {/* Bento Box 3 */}
            <motion.div 
              className="bento-box glass-card"
              whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            >
              <div className="icon-wrapper purple-glow"><Cpu size={36} /></div>
              <h3>Optimization</h3>
              <p>Identifying bottlenecks and replacing them with smart, scalable solutions.</p>
            </motion.div>

            {/* Bento Box 4 */}
            <motion.div 
              className="bento-box glass-card"
              whileHover={{ y: -10, scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}
              onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}
            >
              <div className="icon-wrapper orange-glow"><Code size={36} /></div>
              <h3>Data Pipelines</h3>
              <p>Seamless data movement and transformation between platforms.</p>
            </motion.div>

          </div>
        </section>

        {/* 🏆 3. THE "WHY ME" SECTION */}
        <section className="why-me-section">
           <motion.div 
             className="glass-banner"
             initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
           >
              <h2>Independent & Agile</h2>
              <p>As a self-employed specialist, I bring the speed and flexibility that agencies can't match. Direct collaboration, zero overhead, and full accountability.</p>
              
              <div className="stats-container">
                 <div className="stat-item">
                    <h4>Direct</h4>
                    <span>No middlemen, no delays</span>
                 </div>
                 <div className="stat-item">
                    <h4>Custom</h4>
                    <span>Built for your specific stack</span>
                 </div>
                 <div className="stat-item">
                    <h4>Fast</h4>
                    <span>Quicker delivery, high quality</span>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* 📧 4. FOOTER / CONTACT */}
        <footer className="footer-section">
          <h2>Ready to Automate?</h2>
          <p>Let's eliminate repetitive tasks and integrate AI into your business.</p>
          <div className="social-links-large">
            <a href="mailto:alaaudin.ai@gmail.com" className="social-pill" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <Mail size={20} /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/muhammad-saqib-aichatbotdeveloper" target="_blank" rel="noreferrer" className="social-pill" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              {/* Raw SVG to avoid ANY library errors */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          </div>
          <div className="footer-bottom">
            © 2026 Muhammad Saqib | AI Automation Specialist
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;