import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StakePage.scss';

const StakePage = () => {
  const [amount, setAmount] = useState('0');
  const [availableBalance, setAvailableBalance] = useState(100000.01);
  const [insufficientBalance, setInsufficientBalance] = useState(false);
  const usdRate = 6.01; 
  const navigate = useNavigate();
  
  const formatNumber = (num) => {
    if (typeof num === 'string') {
      num = num.replace(/,/g, '');
    }
    
    let parts = Number(num).toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    return parts.join('.');
  };
  
  const calculateUsdValue = () => {
    const numericAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    return (numericAmount * usdRate).toFixed(2);
  };
  
  const getRemainingBalance = () => {
    const numericAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    const initialBalance = 100000.01; 
    return Math.max(0, initialBalance - numericAmount);
  };
  
  useEffect(() => {
    const numericAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    const initialBalance = 100000.01; 
    setInsufficientBalance(numericAmount > initialBalance);
    
    setAvailableBalance(Math.max(0, initialBalance - numericAmount));
  }, [amount]);
  
  const handleKeyPress = (key) => {
    if (key === 'delete') {
      setAmount(prev => {
        const unformatted = prev.replace(/,/g, '');
        return unformatted.length > 1 ? formatNumber(unformatted.slice(0, -1)) : '0';
      });
    } else if (key === '.') {
      if (!amount.includes('.')) {
        setAmount(prev => prev + '.');
      }
    } else {
      setAmount(prev => {
        const unformatted = prev.replace(/,/g, '');
        return unformatted === '0' ? key : formatNumber(unformatted + key);
      });
    }
  };
  
  const handleMax = () => {
    setAmount(formatNumber('100000.01'));
  };
  
  const getStakingInfo = () => {
    const numericAmount = parseFloat(amount.replace(/,/g, '')) || 0;
    if (numericAmount > 0) {
      return `APY ≈ 5.01% · ${numericAmount > 1000 ? formatNumber(numericAmount.toFixed(2)) : numericAmount.toFixed(2)} TON`;
    }
    return 'APY ≈ 5.01%';
  };
  
  const navigateToOptions = () => {
    navigate('/options'); 
  };
  
  const handleClose = () => {
    navigate('/');
  };
  
  const handleContinue = () => {
    navigate('/deposit', {
      state: {
        amount: amount,
        usdAmount: formatNumber(calculateUsdValue()),
        recipient: 'Tonstakers',
        apy: '5.01%'
      }
    });
  };
  
  return (
    <div className="stake-page">
      <div className="stake-modal">
        <div className="header">
          <div className="info-icon">
            <i className="info-circle-icon">i</i>
          </div>
          <div className="title">Stake</div>
          <div className="close-button" onClick={handleClose}>×</div>
        </div>
        
        <div className="content">
          <div className="upper-content">
            <div className="amount-container">
              <div className="amount-display">
                <span className="amount-value">{amount}</span>
                <span className="amount-currency">TON</span>
              </div>
              <div className="amount-usd">
                <div className="usd-badge">
                  {formatNumber(calculateUsdValue())} USD
                  <span className="up-down-arrows">↑↓</span>
                </div>
              </div>
            </div>
            
            <div className="max-available">
              <button className="max-button" onClick={handleMax}>MAX</button>
              {insufficientBalance ? (
                <div className="available-amount insufficient">Insufficient balance</div>
              ) : (
                <div className="available-amount">Available: {formatNumber(availableBalance)} TON</div>
              )}
            </div>
            
            <div className="staking-option" onClick={navigateToOptions}>
              <div className="option-left">
                <div className="option-logo">
                  O
                </div>
                <div className="option-info">
                  <div className="option-title">
                    Tonstakers
                    <span className="max-apy-badge">MAX APY</span>
                  </div>
                  <div className="option-apy">APY ≈ 5.01% · {amount !== '0' ? amount : '50.01'} TON</div>
                </div>
              </div>
              <div className="option-right">⌄</div>
            </div>
            
            <button 
              className="continue-button" 
              disabled={amount === '0' || insufficientBalance}
              onClick={handleContinue} 
            >
              Continue
            </button>
          </div>
          
          <div className="numpad">
            <button className="key" onClick={() => handleKeyPress('1')}>
              <span className="primary">1</span>
            </button>
            <button className="key" onClick={() => handleKeyPress('2')}>
              <span className="primary">2</span>
              <span className="secondary">ABC</span>
            </button>
            <button className="key" onClick={() => handleKeyPress('3')}>
              <span className="primary">3</span>
              <span className="secondary">DEF</span>
            </button>
            <button className="key" onClick={() => handleKeyPress('4')}>
              <span className="primary">4</span>
              <span className="secondary">GHI</span>
            </button>
            <button className="key" onClick={() => handleKeyPress('5')}>
              <span className="primary">5</span>
              <span className="secondary">JKL</span>
            </button>
            <button className="key" onClick={() => handleKeyPress('6')}>
              <span className="primary">6</span>
              <span className="secondary">MNO</span>
            </button>
            <button className="key" onClick={() => handleKeyPress('7')}>
              <span className="primary">7</span>
              <span className="secondary">PQRS</span>
            </button>
            <button className="key" onClick={() => handleKeyPress('8')}>
              <span className="primary">8</span>
              <span className="secondary">TUV</span>
            </button>
            <button className="key" onClick={() => handleKeyPress('9')}>
              <span className="primary">9</span>
              <span className="secondary">WXYZ</span>
            </button>
            <button className="key" onClick={() => handleKeyPress('.')}>
              <span className="primary">.</span>
            </button>
            <button className="key" onClick={() => handleKeyPress('0')}>
              <span className="primary">0</span>
            </button>
            <button className="key delete" onClick={() => handleKeyPress('delete')}>
              ⌫
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakePage;