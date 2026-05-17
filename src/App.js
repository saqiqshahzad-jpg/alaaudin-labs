import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Scroll animations ke liye
import Typewriter from 'typewriter-effect'; // Typing effect ke liye
import './App.css';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // 🖱️ Cursor Movement Capture
  useEffect(() => {
    const moveCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div>
      {/* 🖱️ Custom Cursor Layer */}
      <div className="custom-cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />

      {/* 🚀 SECTION 1: Hero (The Welcome) */}
      <section className="section-box">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          style={{ fontSize: '4rem', letterSpacing: '-2px' }}
        >
          Muhammad Saqib
        </motion.h1>

        <div className="typewriter-font" style={{ fontSize: '1.5rem' }}>
          <Typewriter
            options={{
              strings: ['AI Automation Expert', 'Lead Gen Strategist', 'Full Stack Coder'],
              autoStart: true, loop: true,
            }}
          />
        </div>
      </section>

      {/* 📜 SECTION 2: Work (Scroll Animation Example) */}
      <motion.section 
        className="section-box"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: '3rem' }}>My Elite Builds</h2>
        <div style={{ marginTop: '20px', padding: '30px', background: '#111', borderRadius: '20px', border: '1px solid #333' }}>
          <h3>California Real Estate AI 🤖</h3>
          <p>Secure OTP Verification + 100% Inbox Delivery.</p>
          <a href="https://carealestateadvisor.online" style={{ color: '#007bff' }}>View Live Demo →</a>
        </div>
      </motion.section>

      {/* Footer / Connect */}
      <footer style={{ padding: '40px', textAlign: 'center', opacity: 0.5, fontSize: '12px' }}>
        © 2026 Alaaudin Labs | Built with Passion & AI.
      </footer>
    </div>
  );
}

export default App;