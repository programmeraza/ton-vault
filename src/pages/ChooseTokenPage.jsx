import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ChooseTokenPage.scss';

const ChooseTokenPage = ({ onClose, onTokenSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.tokenType) {
      sessionStorage.setItem('currentTokenType', location.state.tokenType);
    }
  }, [location]);

  const suggestedTokens = [
    { symbol: 'USDT', name: 'Tether USD', balance: '100,000.01', value: '$100,000.01', icon: '💠' },
    { symbol: 'ANON', name: 'ANON', balance: '0', value: '', icon: '◯' }
  ];

  const otherTokens = [
    { symbol: 'TON', name: 'Toncoin', balance: '100,000.01', value: '$601,000.01', icon: '🔹' },
    { symbol: 'USDT', name: 'Tether USD', balance: '100,000.01', value: '$100,000.01', icon: '💠', tag: 'TON' },
    { symbol: 'ANON', name: 'ANON', balance: '0', value: '', icon: '◯' },
    { symbol: 'GLINT', name: 'Glint Coin', balance: '0', value: '', icon: '✦' }
  ];

  const handleTokenSelect = (token) => {
    if (onTokenSelect && typeof onTokenSelect === 'function') {
      console.log('Token selected:', token);
      onTokenSelect(token);
    } else {
      console.error('onTokenSelect is not provided or is not a function');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOtherTokens = otherTokens.filter(token => 
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="choose-token-page">
      <div className="token-selector-container">
        <div className="header">
          <h1>Choose Token</h1>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="search-container">
          <div className="search-icon">🔍</div>
          <input 
            type="text" 
            placeholder="Search" 
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <div className="token-section">
          <h2>Suggested</h2>
          <div className="suggested-tokens">
            {suggestedTokens.map((token, index) => (
              <button 
                key={`suggested-${index}`} 
                className="token-button suggested" 
                onClick={() => handleTokenSelect(token)}
              >
                <div className={`token-icon ${token.symbol.toLowerCase()}`}>{token.icon}</div>
                <div className="token-symbol">{token.symbol}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="token-section">
          <h2>Other</h2>
          <div className="other-tokens">
            {filteredOtherTokens.map((token, index) => (
              <div 
                key={`other-${index}`}
                className="token-item"
                onClick={() => handleTokenSelect(token)}
              >
                <div className="token-info">
                  <div className={`token-icon ${token.symbol.toLowerCase()}`}>{token.icon}</div>
                  <div className="token-details">
                    <div className="token-symbol">
                      {token.symbol}
                      {token.tag && <span className="token-tag">{token.tag}</span>}
                    </div>
                    <div className="token-name">{token.name}</div>
                  </div>
                </div>
                <div className="token-balance">
                  <div className="balance-amount">{token.balance}</div>
                  {token.value && <div className="balance-value">{token.value}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="close-action" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ChooseTokenPage;