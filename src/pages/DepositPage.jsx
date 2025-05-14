import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './DepositPage.scss';

const DepositPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount, usdAmount, recipient = 'Tonstakers', apy = '5.01%' } = location.state || {};
  
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const fee = 0.01;
  const feeUsd = 0.01;
  
  const handleConfirm = () => {
    setIsConfirmed(true);
  };
  
  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="deposit-page">
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="close-button" onClick={() => navigate('/')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="content">
        <div className="logo">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#D7F9F3"/>
            <circle cx="24" cy="28" r="12" fill="black"/>
            <circle cx="44" cy="36" r="8" fill="black"/>
          </svg>
        </div>
        
        <div className="deposit-info">
          <div className="deposit-label">Deposit</div>
          <div className="deposit-amount">{amount || '1,000.01'} TON</div>
          <div className="deposit-usd">${usdAmount || '6,010.01'}</div>
        </div>
        
        <div className="details">
          <div className="detail-row">
            <div className="detail-label">Wallet</div>
            <div className="detail-value">
              <div className="wallet-icon">🙃</div>
              <div className="wallet-name">Main</div>
            </div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Recipient</div>
            <div className="detail-value">{recipient}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">APY</div>
            <div className="detail-value">≈ {apy}</div>
          </div>
          
          <div className="detail-row">
            <div className="detail-label">Fee</div>
            <div className="detail-value">
              <div>≈{fee} TON</div>
              <br />
              <div className="fee-usd">${feeUsd}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer">
        {!isConfirmed ? (
          <button className="confirm-button" onClick={handleConfirm}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Press to Confirm</span>
          </button>
        ) : (
          <div className="confirmed">
            <div className="check-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#00D395" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="done-text">Done</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositPage;