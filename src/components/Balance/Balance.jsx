import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Balance.scss'

const Balance = () => {
  const navigate = useNavigate();
  
  const handleStakeClick = () => {
    navigate('/stake');
  };
  
  const handleSwapClick = () => {
    navigate('/swap');
  };
  
  const handleBuySellClick = () => {
    navigate('/buysell');
  };
  
  return (
    <div className="app-wrapper">
      <div className="content">
        <div className="balance">
          <div className="balance-header">
            <div className="balance-title">
              <div className="icon-container">
                <span className="money-icon">💰</span>
                <span>Money</span>
              </div>
              <span className="arrow-down">▼</span>
            </div>
            <div className="settings-icon">⚙️</div>
          </div>
          
          <div className="balance-amount">
            <h1>$700,000</h1>
            <div className="wallet-id">EQF2...G21Z</div>
          </div>
          
          <div className="action-buttons">
            <div className="action-button">
              <div className="action-icon">↑</div>
              <div className="action-text">Send</div>
            </div>
            <div className="action-button">
              <div className="action-icon">↓</div>
              <div className="action-text">Receive</div>
            </div>
            <div className="action-button">
              <div className="action-icon">□</div>
              <div className="action-text">Scan</div>
            </div>
          </div>
          
          <div className="action-buttons">
            <div className="action-button" onClick={handleSwapClick}>
              <div className="action-icon">↕</div>
              <div className="action-text">Swap</div>
            </div>
            <div className="action-button" onClick={handleBuySellClick}>
              <div className="action-icon">$</div>
              <div className="action-text">Buy or Sell</div>
            </div>
            <div className="action-button" onClick={handleStakeClick}>
              <div className="action-icon">▲</div>
              <div className="action-text">Stake</div>
            </div>
          </div>
          
          <div className="tokens">
            <div className="token-item">
              <div className="token-info">
                <div className="token-icon ton">◆</div>
                <div className="token-details">
                  <div className="token-name">TON</div>
                  <div className="token-price">$6.01 <span className="positive">+7.32%</span></div>
                </div>
              </div>
              <div className="token-balance">
                <div className="token-amount">100,000.01</div>
                <div className="token-value">$601,000.01</div>
              </div>
            </div>
            
            <div className="token-item">
              <div className="token-info">
                <div className="token-icon usdt">○</div>
                <div className="token-details">
                  <div className="token-name">USDT <span className="token-network">TON</span></div>
                  <div className="token-price">$1.01 <span className="positive">+0.01%</span></div>
                </div>
              </div>
              <div className="token-balance">
                <div className="token-amount">100,000.01</div>
                <div className="token-value">$100,000.01</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;