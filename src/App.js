import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Zap, Mail, Linkedin, Globe } from 'lucide-react';
import './App.css';

const App = () => {
  return (
    <div className="bento-container">
      {/* 🚀 HERO SECTION */}
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

        {/* 🛠️ SERVICES GRID */}
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

        {/* 📊 STATS / EXPERIENCE */}
        <div className="card wide-card">
          <h2>Why Work With Me?</h2>
          <div className="stats-flex">
            <div><strong>Direct</strong><p>No middlemen</p></div>
            <div><strong>Agile</strong><p>Zero overhead</p></div>
            <div><strong>Fast</strong><p>Quicker delivery</p></div>
          </div>
        </div>

        {/* 📧 CONNECT */}
        <div className="card contact-card">
          <div className="social-links">
            <a href="mailto:alaaudin.ai@gmail.com"><Mail /></a>
            <a href="https://linkedin.com/in/muhammad-saqib-aichatbotdeveloper"><Linkedin /></a>
            <a href="#"><Globe /></a>
          </div>
          <button className="elite-btn">Start a Conversation</button>
        </div>
      </motion.div>
    </div>
  );
};

export default App;