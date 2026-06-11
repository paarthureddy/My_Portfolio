import React from 'react'
import './Resume.css'

export default function Resume() {
  return (
    <section className="resume-page">
      <div className="resume-header">
        <h1 className="hero-heading hero-heading-xl">My Resume.</h1>
        <p className="hero-sub">
          Here's a detailed breakdown of my experience, skills, and background.
        </p>
        <div className="resume-btns">
          <a
            href="/assets/resume.pdf"
            download="Paarthu_Reddy_Resume.pdf"
            className="btn-primary"
          >
            DOWNLOAD PDF ↓
          </a>
        </div>
      </div>

      <div className="resume-native-content">
        
        {/* Education */}
        <div className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>B.Tech Computer Science &amp; Engineering</h3>
              <span className="resume-date">2022 — 2026</span>
            </div>
            <div className="resume-org">Amrita Vishwa Vidyapeetham, Coimbatore</div>
            <p className="resume-desc">CGPA: 7.78</p>
          </div>
        </div>

        {/* Experience */}
        <div className="resume-section">
          <h2 className="resume-section-title">Experience</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Software Development Intern</h3>
              <span className="resume-date">Apr 2026 — May 2026</span>
            </div>
            <div className="resume-org">TRIBLI Deeptech</div>
            <p className="resume-desc">
              Designed scalable REST APIs for client data management and workflow automation. Supported client integration, authored comprehensive API documentation, and participated in agile deployment processes.
            </p>
          </div>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>SDE &amp; Client Management Intern</h3>
              <span className="resume-date">Apr 2025 — Jun 2025</span>
            </div>
            <div className="resume-org">SiliconWireless Systems</div>
            <p className="resume-desc">
              Built APIs for biometric devices, streamlined facial recognition and fingerprint authentication workflows. Led firmware testing and validation for proprietary secure devices.
            </p>
          </div>
        </div>

        {/* Projects Summary */}
        <div className="resume-section">
          <h2 className="resume-section-title">Selected Projects</h2>
          <div className="resume-grid">
            <div className="resume-grid-item">
              <h4>Digital Collaborative Canvas</h4>
              <p>Real-time drawing app using React, Node, Socket.IO &amp; MongoDB.</p>
            </div>
            <div className="resume-grid-item">
              <h4>Cyber Phishing Detection</h4>
              <p>Threat analysis engine with Random Forest Classifiers and feature extraction.</p>
            </div>
            <div className="resume-grid-item">
              <h4>Workflow Automation</h4>
              <p>Enterprise platform built for Tribli Deeptech business processes.</p>
            </div>
            <div className="resume-grid-item">
              <h4>RAG Funding AI</h4>
              <p>Retrieval-augmented AI system simulating explainable funding decisions.</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h2 className="resume-section-title">Skills &amp; Technologies</h2>
          <div className="resume-skills">
            <span className="r-skill">React.js</span>
            <span className="r-skill">Node.js</span>
            <span className="r-skill">Express.js</span>
            <span className="r-skill">Python</span>
            <span className="r-skill">C++</span>
            <span className="r-skill">JavaScript</span>
            <span className="r-skill">TypeScript</span>
            <span className="r-skill">MongoDB</span>
            <span className="r-skill">PostgreSQL</span>
            <span className="r-skill">Socket.IO</span>
            <span className="r-skill">Docker</span>
            <span className="r-skill">Git</span>
          </div>
        </div>

        {/* Achievements */}
        <div className="resume-section">
          <h2 className="resume-section-title">Achievements</h2>
          <ul className="resume-list">
            <li><strong>AIverse Hackathon:</strong> Finalist, Anokha 2026. Built RAG AI system.</li>
            <li><strong>Hack101:</strong> 3rd Place out of 50+ teams.</li>
            <li><strong>Procession Head:</strong> 1st Place for organizing technical symposium.</li>
            <li><strong>MUN:</strong> Honorable Mention at inter-college Model UN.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
