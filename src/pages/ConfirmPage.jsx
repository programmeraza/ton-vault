import React, { useState } from 'react';
import './ConfirmPage.scss';

const ConfirmPage = ({ onClose, onCancel, onConfirm, swapDetails }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      if (onConfirm) {
        onConfirm();
      }
    }, 1500);
  };

  const defaultSwapDetails = {
    sendToken: { icon: null, symbol: 'TON' },
    receiveToken: { icon: null, symbol: 'USDT' },
    sendAmount: 100,
    receiveAmount: 200,
    priceImpact: '0.001%',
    minimumReceived: '6,000.01 USDT',
    liquidityProviderFee: '0.0000001 USDT',
    blockchainFee: '0.11 - 0.17 TON',
    route: 'TON » USDT',
    provider: 'STON.fi'
  };

  const details = swapDetails || defaultSwapDetails;

  if (!details) {
    return null;
  }

  const formatUsdValue = (value) => {
    if (typeof value === 'number') {
      return `$${value.toFixed(2)}`;
    }
    return value;
  };

  return (
    <div className="confirm-page">
      <div className="confirm-container">
        <div className="header">
          <h1>Confirm Swap</h1>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="swap-details">
          <div className="swap-amounts">
            <div className="send-row">
              <div className="token-info">
                <div className="token-icon">
                  {details.sendToken.icon ? (
                    <img src={details.sendToken.icon} alt={details.sendToken.symbol} />
                  ) : (
                    <span>◆</span>
                  )}
                </div>
                <div className="token-symbol">{details.sendToken.symbol}</div>
              </div>
              <div className="amount">
                {typeof details.sendAmount === 'number' 
                  ? details.sendAmount.toLocaleString(undefined, {maximumFractionDigits: 2}) 
                  : details.sendAmount}
              </div>
            </div>
            
            <div className="swap-arrow">↓</div>
            
            <div className="receive-row">
              <div className="token-info">
                <div className="token-icon">
                  {details.receiveToken.icon ? (
                    <img src={details.receiveToken.icon} alt={details.receiveToken.symbol} />
                  ) : (
                    <span>◆</span>
                  )}
                </div>
                <div className="token-symbol">{details.receiveToken.symbol}</div>
              </div>
              <div className="amount">
                {typeof details.receiveAmount === 'number' 
                  ? details.receiveAmount.toLocaleString(undefined, {maximumFractionDigits: 2}) 
                  : details.receiveAmount}
              </div>
            </div>
          </div>
          
          <div className="details-section">
            <div className="detail-row">
              <div className="detail-label">
                Price impact 
                <span className="info-icon">ⓘ</span>
              </div>
              <div className="detail-value">0.001%</div>
            </div>
            
            <div className="detail-row">
              <div className="detail-label">
                Minimum received
                <span className="info-icon">ⓘ</span>
              </div>
              <div className="detail-value">6,000.01 USDT</div>
            </div>
            
            <div className="detail-row">
              <div className="detail-label">
                Liquidity provider fee
                <span className="info-icon">ⓘ</span>
              </div>
              <div className="detail-value">0.0000001 USDT</div>
            </div>
            
            <div className="detail-row">
              <div className="detail-label">Blockchain fee</div>
              <div className="detail-value">0.11 - 0.17 TON</div>
            </div>
            
            <div className="detail-row">
              <div className="detail-label">Route</div>
              <div className="detail-value">TON » USDT</div>
            </div>
            
            <div className="detail-row">
              <div className="detail-label">Provider</div>
              <div className="detail-value">STON.fi</div>
            </div>
          </div>
        </div>
        
        <div className="actions">
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button className="confirm-button" onClick={handleConfirm} disabled={loading}>
            {loading ? "Confirming..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPage;