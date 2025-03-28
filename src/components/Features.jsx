import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title animate-on-scroll">
          <h2>Core Platform Functions & Key Benefits</h2>
          <p>The ultimate oil & gas crew scheduling and journey management software</p>
        </div>
        <div className="features-grid">
          <div className="feature-item animate-on-scroll">
            <div className="feature-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-blue)' }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <path d="M8 14h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 18h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M16 18h.01"></path>
              </svg>
            </div>
            <h3>Automated Crew Scheduling</h3>
            <div className="feature-content">
              <p>Automatic scheduling engine assigns optimal crews based on proximity, qualifications, and availability. Eliminate manual spreadsheets and whiteboards while reducing scheduling errors by 85%. HitchGuardian ensures every oilfield shift is fully staffed with the right personnel.</p>
            </div>
          </div>
          
          <div className="feature-item animate-on-scroll">
            <div className="feature-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-green)' }}>
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
            </div>
            <h3>Real-Time Journey Management</h3>
            <div className="feature-content">
              <p>GPS-enabled vehicle tracking with automated route optimization and risk assessment. Reduce fuel costs by 23% while enhancing driver safety through automated check-ins. HitchGuardian's journey management prevents disruptions in high-risk oilfield environments.</p>
            </div>
          </div>
          
          <div className="feature-item animate-on-scroll">
            <div className="feature-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-blue)' }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                <line x1="9" y1="10" x2="15" y2="10"></line>
              </svg>
            </div>
            <h3>Continuous Communication & Instant Updates</h3>
            <div className="feature-content">
              <p>Seamless communication between field and office with instant notifications and alerts. Ensure critical safety information reaches crews immediately while maintaining documented communication trails. HitchGuardian eliminates costly miscommunications in Western Canadian oilfields.</p>
            </div>
          </div>
          
          <div className="feature-item animate-on-scroll">
            <div className="feature-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-green)' }}>
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
            </div>
            <h3>Smart Insights & KPI Tracking</h3>
            <div className="feature-content">
              <p>Data-driven operations management with customizable KPI dashboards and predictive analytics. Monitor workforce efficiency, compliance metrics, and operational costs in real-time. HitchGuardian transforms oilfield data into actionable business intelligence.</p>
            </div>
          </div>
          
          <div className="feature-item animate-on-scroll">
            <div className="feature-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-blue)' }}>
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
            <h3>All-in-One Integrated Platform</h3>
            <div className="feature-content">
              <p>Unified oil & gas operations platform built by Alberta industry veterans. Replace multiple disjointed systems with one intuitive interface for scheduling, journey tracking, and compliance. HitchGuardian's Western Canada-focused solution delivers rapid implementation and high adoption rates.</p>
            </div>
          </div>
          
          <div className="feature-item animate-on-scroll">
            <div className="feature-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-green)' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <h3>Enhanced Safety & Compliance</h3>
            <div className="feature-content">
              <p>Automated regulatory compliance with digital safety protocols and qualification tracking. Meet or exceed all CAODC, Enform, and provincial safety standards. HitchGuardian provides auditable compliance records that secure contracts and protect oilfield operations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;