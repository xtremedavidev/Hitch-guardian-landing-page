import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <a href="#" className="logo">
          <img src="/logofull.svg" className='h-4' alt="HitchGuardian Logo" id="logo-image" onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjUwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzdHlsZT4KICAgIC5sb2dvLXRleHQgewogICAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjsKICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7CiAgICAgIGZvbnQtc2l6ZTogMjBweDsKICAgICAgZmlsbDogIzAwNjZjYzsKICAgIH0KICAgIC5sb2dvLWljb24gewogICAgICBmaWxsOiAjMDA2NmNjOwogICAgfQogIDwvc3R5bGU+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSAxMCkiPgogICAgPHBhdGggY2xhc3M9ImxvZ28taWNvbiIgZD0iTTEwLDAgQzQuNDc3LDAgMCw0LjQ3NyAwLDEwIEMwLDE1LjUyMyA0LjQ3NywyMCAxMCwyMCBDMTUuNTIzLDIwIDIwLDE1LjUyMyAyMCwxMCBDMjAsNC40NzcgMTUuNTIzLDAgMTAsMCBaTTEzLjUsMTUgTDYuNSwxNSBMNi41LDUgTDEzLjUsNSBMMTMuNSwxNSBaIE00LDE1IEwyLjUsMTUgTDIuNSw1IEw0LDUgTDQsMTUgWiBNMTcuNSwxNSBMMTYsMTUgTDE2LDUgTDE3LjUsNSBMMTcuNSwxNSBaIiAvPgogICAgPHRleHQgeD0iMjUiIHk9IjE1LjUiIGNsYXNzPSJsb2dvLXRleHQiPkhpdGNoR3VhcmRpYW48L3RleHQ+CiAgPC9nPgo8L3N2Zz4=';
          }} />
        </a>
        <nav>
          <ul>
            <li><a href="#problem">Problem</a></li>
            <li><a href="#solution">Solution</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#different">Why Us</a></li>
            <li><a href="#demo" className="cta-button">Get Demo</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;