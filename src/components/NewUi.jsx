import React, { useState } from 'react';
import './NewUiCss.css';
const HitchGuardianLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
    

      {/* Header */}
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src="\logofull.svg" alt="HitchGuardian Logo" className="company-logo" />
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#challenge">Challenges</a></li>
              <li><a href="#solution">Solution</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>☰</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Empowering Your Workforce, Streamlining Complex Logistics</h1>
            <p>Say goodbye to chaos in crew scheduling and journey management. With HitchGuardian, manage your workforce, ensure safety compliance, and track journeys in real time—all from one intuitive platform.</p>
            <a href="#contact" className="btn">Ready to transform your operations?</a>
            <a href="#solution" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge" id="challenge">
        <div className="container">
          <h2>The Challenge</h2>
          <p className="section-intro">In industries like oil & gas, mining, construction, and field services, managing a complex workforce isn't just about scheduling shifts—it's about coordinating multi-shift, multi-location operations with strict safety and compliance requirements.</p>
          
          <div className="challenge-cards">
            <div className="challenge-card">
              <h3>Endless Phone Calls & Spreadsheets</h3>
              <p>Traditional methods fail to capture the dynamic nature of your operations, leading to miscommunication, scheduling conflicts, and endless hours spent on administrative tasks.</p>
            </div>
            
            <div className="challenge-card">
              <h3>Compliance & Safety Risks</h3>
              <p>Ensuring every worker's certification is up to date is a full-time job in itself. Missing just one expired certification can lead to serious compliance issues and safety hazards.</p>
            </div>
            
            <div className="challenge-card">
              <h3>Journey Management Headaches</h3>
              <p>Tracking vehicles, optimizing routes, and managing logistics manually leads to inefficiencies, higher fuel costs, and safety risks for drivers navigating complex terrain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution" id="solution">
        <div className="container">
          <h2>Our Solution: HitchGuardian</h2>
          <p className="section-intro">HitchGuardian was built from the ground up to tackle these challenges head-on, delivering a comprehensive, streamlined solution for complex workforce logistics.</p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-header">
                <h3>Crew Management</h3>
              </div>
              <div className="feature-body">
                <ul>
                  <li>Instantly assign the right crew to the right job with automated scheduling.</li>
                  <li>Real-time notifications ensure that every shift is covered by qualified, compliant workers.</li>
                  <li>Visualize crew rotations and availability across multiple locations and projects.</li>
                </ul>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-header">
                <h3>Safety & Compliance</h3>
              </div>
              <div className="feature-body">
                <ul>
                  <li>Automated tracking of certifications and training ensures that your team always meets safety standards.</li>
                  <li>Compliance dashboards keep you audit-ready and reduce liability risks.</li>
                  <li>Automatic alerts for expiring certifications and required training updates.</li>
                </ul>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-header">
                <h3>Journey Management</h3>
              </div>
              <div className="feature-body">
                <ul>
                  <li>Track vehicles and drivers in real time, optimizing routes and reducing operational costs.</li>
                  <li>Integrated mapping and live data ensure smooth and efficient transportation, whether on urban roads or remote sites.</li>
                  <li>Automated journey risk assessments and safety check-ins.</li>
                </ul>
              </div>
            </div>
            
            <div className="feature">
              <div className="feature-header">
                <h3>Smart Insights & Analytics</h3>
              </div>
              <div className="feature-body">
                <ul>
                  <li>Gain immediate visibility into key performance metrics—from workforce productivity to financial KPIs.</li>
                  <li>Customizable dashboards allow you to monitor what matters most, driving data-informed decisions.</li>
                  <li>Predictive analytics to optimize scheduling and resource allocation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits" id="benefits">
        <div className="container">
          <h2>Unified Benefits for Your Organization</h2>
          <p className="section-intro">HitchGuardian isn't just a tool; it's a partner in transforming your operations. Our platform delivers specific advantages to every department in your organization.</p>
          
          <div className="benefits-wrapper">
            <div className="benefit">
              <div className="benefit-icon">👷</div>
              <h3>For Operations Managers & Dispatchers</h3>
              <p>Eliminate scheduling chaos and free up valuable time for strategic decision-making. Take control of your operations with real-time visibility into crew locations, qualifications, and availability.</p>
            </div>
            
            <div className="benefit">
              <div className="benefit-icon">💻</div>
              <h3>For Tech Leaders & IT Teams</h3>
              <p>Seamlessly integrate with your existing systems through robust APIs, with enterprise-grade security and scalability. Our cloud-based solution means minimal maintenance and maximum reliability.</p>
            </div>
            
            <div className="benefit">
              <div className="benefit-icon">📊</div>
              <h3>For Business Owners & CEOs</h3>
              <p>Achieve significant cost savings, enhanced safety, and increased operational efficiency that drive growth and profitability. Make confident, data-driven decisions with comprehensive analytics.</p>
            </div>
          </div>
          
          <p style={{ textAlign: 'center', marginTop: '3rem' }}>Together, these benefits create a single, powerful platform that simplifies complex workforce logistics—from the oilfield to the boardroom.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" id="contact">
        <div className="container">
          <h2>Join the Revolution</h2>
          <p>Experience firsthand how HitchGuardian transforms chaotic operations into streamlined, efficient workflows.</p>
          <p>Contact us today:</p>
          <a href="mailto:gethitched@hitchguardian.me" className="btn">📧 gethitched@hitchguardian.me</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
        <div class="footer-social">
        <a href="https://www.linkedin.com/company/104143678/admin/dashboard/" target="_blank" class="linkedin-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" class="linkedin-icon">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="currentColor"/>
          </svg>
          <span>Connect with us on LinkedIn</span>
        </a>
      </div>
          <p>&copy; 2025 HitchGuardian. All Rights Reserved.</p>
          <p>Transforming workforce logistics in oil & gas, mining, construction, and field services.</p>
          <p><a href="mailto:gethitched@hitchguardian.me">gethitched@hitchguardian.me</a></p>
        </div>
      </footer>
    </>
  );
};

export default HitchGuardianLanding;