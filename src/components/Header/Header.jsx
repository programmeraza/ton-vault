import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="nav-item active">
        <div className="icon wallet-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#42A5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 7L12 13L21 7" stroke="#42A5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="label">Wallet</span>
      </div>
      
      <div className="nav-item">
        <div className="icon history-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 7V12L15 15" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="label">History</span>
      </div>
      
      <div className="nav-item">
        <div className="icon browser-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 12H21" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 3V21" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="label">Browser</span>
      </div>
      
      <div className="nav-item">
        <div className="icon purchases-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="label">Purchases</span>
      </div>
    </div>
  );
};

export default Header;