import React, { useState } from 'react';
import './OptionsPage.scss';

const OptionsPage = ({ onBack, onClose }) => {
  const [selectedLiquidStaking, setSelectedLiquidStaking] = useState('tonstakers');
  
  const handleLiquidStakingSelect = (option) => {
    setSelectedLiquidStaking(option);
  };
  
  return (
    <div className="options-page">
      <div className="options-modal" style={{ height: '100vh', maxHeight: '100vh' }}>
        <div className="header">
          <button className="back-button" onClick={onBack}>
            <span className="back-icon">←</span>
          </button>
          <div className="title">Options</div>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="content" style={{ height: 'calc(100vh - 64px)' }}>
          <h2 className="section-title">Liquid Staking</h2>
          
          <div className="options-group">
            <div 
              className={`option ${selectedLiquidStaking === 'tonstakers' ? 'selected' : ''}`}
              onClick={() => handleLiquidStakingSelect('tonstakers')}
            >
              <div className="option-left">
                <div className="option-logo tonstakers">
                  <span className="logo-placeholder">''</span>
                </div>
                <div className="option-info">
                  <div className="option-title">
                    Tonstakers
                    <span className="max-apy-badge">MAX APY</span>
                  </div>
                  <div className="option-details">
                    Minimum deposit 1 TON.
                    <div className="apy-info">APY ≈ 5.01%</div>
                  </div>
                </div>
              </div>
              <div className="option-right">
                <div className={`radio-button ${selectedLiquidStaking === 'tonstakers' ? 'selected' : ''}`}>
                  {selectedLiquidStaking === 'tonstakers' && <div className="radio-inner"></div>}
                </div>
              </div>
            </div>
            
            <div 
              className={`option ${selectedLiquidStaking === 'bemo' ? 'selected' : ''}`}
              onClick={() => handleLiquidStakingSelect('bemo')}
            >
              <div className="option-left">
                <div className="option-logo bemo">
                  <span className="logo-placeholder"></span>
                </div>
                <div className="option-info">
                  <div className="option-title">Bemo</div>
                  <div className="option-details">
                    Minimum deposit 1 TON.
                    <div className="apy-info">APY ≈ 4.01%</div>
                  </div>
                </div>
              </div>
              <div className="option-right">
                <div className={`radio-button ${selectedLiquidStaking === 'bemo' ? 'selected' : ''}`}>
                  {selectedLiquidStaking === 'bemo' && <div className="radio-inner"></div>}
                </div>
              </div>
            </div>
            
            <div 
              className={`option ${selectedLiquidStaking === 'whales' ? 'selected' : ''}`}
              onClick={() => handleLiquidStakingSelect('whales')}
            >
              <div className="option-left">
                <div className="option-logo whales">
                  <span className="logo-placeholder">W</span>
                </div>
                <div className="option-info">
                  <div className="option-title">Whales Liquid Pool</div>
                  <div className="option-details">
                    Minimum deposit 1 TON.
                    <div className="apy-info">APY ≈ 4.01%</div>
                  </div>
                </div>
              </div>
              <div className="option-right">
                <div className={`radio-button ${selectedLiquidStaking === 'whales' ? 'selected' : ''}`}>
                  {selectedLiquidStaking === 'whales' && <div className="radio-inner"></div>}
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="section-title">Other</h2>
          
          <div className="options-group">
            <div className="option with-arrow">
              <div className="option-left">
                <div className="option-logo ton-whales">
                  <span className="logo-placeholder">W</span>
                </div>
                <div className="option-info">
                  <div className="option-title">TON Whales</div>
                  <div className="option-details">
                    Minimum deposit 50 TON.
                    <div className="apy-info">Earn up to 3.01%</div>
                  </div>
                </div>
              </div>
              <div className="option-right">
                <span className="arrow">›</span>
              </div>
            </div>
            
            <div className="option with-arrow">
              <div className="option-left">
                <div className="option-logo nominators">
                  <span className="logo-placeholder">V</span>
                </div>
                <div className="option-info">
                  <div className="option-title">TON Nominators</div>
                  <div className="option-details">
                    Minimum deposit 10K TON.
                    <div className="apy-info">Earn up to 3.01%</div>
                  </div>
                </div>
              </div>
              <div className="option-right">
                <span className="arrow">›</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsPage;