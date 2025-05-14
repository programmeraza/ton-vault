import React from 'react';
import './MercuryoPage.scss';

const MercuryoPage = ({ onBack, onClose }) => {
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  const handleCloseClick = () => {
    if (onClose) {
      onClose();
    } else {
      console.log('Close button clicked');
    }
  };

  return (
    <div className="mercuryo-page">
      <div className="mercuryo-modal">
        <div className="header">
          <button className="back-button" onClick={handleBackClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="page-title"></div>
          <button className="close-button" onClick={handleCloseClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="content">
          <div className="upper-content">
            <div className="logo-container">
              <div className="logo-box">
                <svg width="40" height="40" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M423.5 109C477.5 156 554 279.5 423.5 423.5C293 567.5 109 477.5 109 423.5C109 369.5 176.5 232.5 293 232.5C409.5 232.5 369.5 62 423.5 109Z" fill="black" stroke="black" strokeWidth="20"/>
                  <path d="M120 120C199.5 40.5 369.5 100 423.5 200C477.5 300 534 513.5 423.5 513.5C313 513.5 40.5 199.5 120 120Z" stroke="black" strokeWidth="20"/>
                </svg>
              </div>
              <h2 className="service-name">Mercuryo</h2>
              <p className="service-description">Instantly buy with a credit card</p>
            </div>

            <div className="payment-row">
                <span className="label">You pay</span>
                <span className="amount">100 TON</span>
              </div>
            
            <div className="payment-details">
              <div className="payment-row">
                <span className="label">You get</span>
                <span className="amount">233,001 AMD</span>
              </div>
              
              <div className="rate">2,330.01 AMD for 1 TON</div>
            </div>
          </div>
          
          <div className="bottom-content">
            <button 
              className="continue-button" 
              onClick={handleCloseClick}
            >
              Continue
            </button>
            <div className="footer">
              <p className="service-info">Service provided by Mercuryo</p>
              <div className="links">
                <a href="#" onClick={(e) => { e.preventDefault(); console.log('Privacy Policy clicked'); }} className="footer-link">Privacy Policy</a>
                <span className="separator">·</span>
                <a href="#" onClick={(e) => { e.preventDefault(); console.log('Terms of Use clicked'); }} className="footer-link">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MercuryoPage;