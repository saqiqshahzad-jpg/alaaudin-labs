import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Zap, Mail, Globe } from 'lucide-react'; // ✅ Removed Linkedin from here
import './App.css';

const App = () => {
  return (
    <div className="bento-container">
      <motion.div className="bento-grid">
        <motion.div 
          className="card profile-card"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        >
          <div className="status">🟢 Remote-Ready</div>
          <h1>Muhammad Saqib</h1>
          <p className="highlight">AI Automation Specialist</p>
          <p className="desc">Expert in building intelligent systems that drive real results.</p>
        </motion.div>

        <div className="card service-card">
          <Bot size={32} color="#10b981" />
          <h3>AI Agents</h3>
          <p>Autonomous agents that handle tasks & integrate with tools.</p>
        </div>

        <div className="card service-card">
          <Zap size={32} color="#3b82f6" />
          <h3>Workflows</h3>
          <p>End-to-end automation pipelines powered by AI.</p>
        </div>

        <div className="card service-card">
          <Cpu size={32} color="#8b5cf6" />
          <h3>Optimization</h3>
          <p>Replacing bottlenecks with smart, scalable solutions.</p>
        </div>

        <div className="card wide-card">
          <h2>Why Work With Me?</h2>
          <div className="stats-flex">
            <div><strong>Direct</strong><p>No middlemen</p></div>
            <div><strong>Agile</strong><p>Zero overhead</p></div>
            <div><strong>Fast</strong><p>Quicker delivery</p></div>
          </div>
        </div>

        <div className="card contact-card">
          <div className="social-links">
            <a href="mailto:alaaudin.ai@gmail.com"><Mail /></a>
            
            {/* ✅ ASLI SVG JUGAR: No library needed! */}
            <a href="https://www.linkedin.com/in/muhammad-saqib-aichatbotdeveloper" target="_blank">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            <a href="#"><Globe /></a>
          </div>
          <button className="elite-btn">Start a Conversation</button>
        </div>
      </motion.div>
    </div>
  );
};

export default App;