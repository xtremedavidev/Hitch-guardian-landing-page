import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3>HitchGuardian</h3>
          <p>The ultimate oil & gas crew scheduling and journey management software built for Western Canada.</p>
        </div>
        
        <div className="footer-column">
          <h3>Solutions</h3>
          <ul>
            <li><a href="#">Crew Scheduling</a></li>
            <li><a href="#">Journey Management</a></li>
            <li><a href="#">Real-Time Communication</a></li>
            <li><a href="#">Analytics & Reporting</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Connect With Us</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/company/104143678/admin/dashboard/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', background: '#0077b5', color: 'white', padding: '10px 18px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s ease', marginTop: '10px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: '10px', fill: 'currentColor' }}>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>Follow us on LinkedIn</span>
              </a>
            </li>
            <li><a href="mailto:gethitched@hitchguardian.me"><i className="fas fa-envelope"></i> Email Us</a></li>
            <li><a href="#"><i className="fas fa-question-circle"></i> Support</a></li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; 2025 HitchGuardian. All rights reserved.</p>
        <p style={{ marginTop: '10px', fontSize: '0.95rem', color: 'var(--medium-grey)' }}>
          <span style={{ display: 'inline-block', width: '22px', height: '14px', marginRight: '6px', verticalAlign: 'middle', backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48bWFzayBpZD0iYSI+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiIGZpbGw9IiNmZmYiLz48L21hc2s+PGcgbWFzaz0idXJsKCNhKSI+PHBhdGggZmlsbD0iI2YwZjBmMCIgZD0iTTAgMGg1MTJ2NTEySDB6Ii8+PHBhdGggZmlsbD0iI2Q4MDAyNyIgZD0iTTAgMGgxMjh2NTEySDB6bTM4NCAwaDEyOHY1MTJIMzg0ek0xMjggMGgyNTZ2NTEySDF6Ii8+PHBhdGggZmlsbD0iI2Q4MDAyNyIgZD0ibTMwNC40IDI0MS4zLTQ4LjQgMjQuMiAyNC4yLTQ4LjQtMjQuMi00OC40IDQ4LjQgMjQuMiA0OC40LTI0LjItMjQuMiA0OC40IDI0LjIgNDguNHoiLz48L2c+PC9zdmc+")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></span>
          Calgary, Alberta, Canada
        </p>
      </div>
    </footer>
  );
};

export default Footer;