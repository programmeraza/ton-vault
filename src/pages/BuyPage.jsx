import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyPage.scss';

const BuyPage = () => {
  const [amount, setAmount] = useState('0');
  const [activeTab, setActiveTab] = useState('buy');
  const [paymentMethod, setPaymentMethod] = useState('creditCardInternational');
  const usdRate = 6.01; 
  const navigate = useNavigate();
  const minAmount = 100;
  
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
  
  const handleClose = () => {
    navigate('/');
  };
  
  const handleContinue = () => {
    navigate('/payment', {
      state: {
        amount: amount,
        usdAmount: formatNumber(calculateUsdValue()),
        paymentMethod: paymentMethod,
        action: activeTab
      }
    });
  };
  
  const handleTabChange = (tab) => {
    if (tab === 'sell') {
      navigate('/sell');
    } else {
      setActiveTab(tab);
    }
  };
  
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  
  return (
    <div className="buy-page">
      <div className="buy-modal">
        <div className="header">
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'buy' ? 'active' : ''}`} 
              onClick={() => handleTabChange('buy')}
            >
              Buy
            </button>
            <button 
              className={`tab-button ${activeTab === 'sell' ? 'active' : ''}`} 
              onClick={() => handleTabChange('sell')}
            >
              Sell
            </button>
          </div>
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
                </div>
              </div>
            </div>
            
            <div className="min-amount">
              Min. amount: {minAmount} TON
            </div>
            
            <div className="payment-methods">
              <div 
                className={`payment-method ${paymentMethod === 'creditCardInternational' ? 'selected' : ''}`}
                onClick={() => handlePaymentMethodChange('creditCardInternational')}
              >
                <div className="method-left">
                  <div className="radio-button">
                    {paymentMethod === 'creditCardInternational' && <div className="radio-inner"></div>}
                  </div>
                  <div className="method-info">
                    <div className="method-name">Credit Card</div>
                  </div>
                </div>
                <div className="method-right">
                  <div className="card-icons">
                    <span className="mastercard-icon">MC</span>
                    <span className="visa-icon">VISA</span>
                  </div>
                </div>
              </div>
              
              <div 
                className={`payment-method ${paymentMethod === 'creditCardRub' ? 'selected' : ''}`}
                onClick={() => handlePaymentMethodChange('creditCardRub')}
              >
                <div className="method-left">
                  <div className="radio-button">
                    {paymentMethod === 'creditCardRub' && <div className="radio-inner"></div>}
                  </div>
                  <div className="method-info">
                    <div className="method-name">Credit Card</div>
                    <div className="method-currency">RUB</div>
                  </div>
                </div>
                <div className="method-right">
                  <div className="card-icons">
                    <span className="mir-icon">MIR</span>
                  </div>
                </div>
              </div>
              
              <div 
                className={`payment-method ${paymentMethod === 'cryptocurrency' ? 'selected' : ''}`}
                onClick={() => handlePaymentMethodChange('cryptocurrency')}
              >
                <div className="method-left">
                  <div className="radio-button">
                    {paymentMethod === 'cryptocurrency' && <div className="radio-inner"></div>}
                  </div>
                  <div className="method-info">
                    <div className="method-name">Cryptocurrency</div>
                  </div>
                </div>
                <div className="method-right">
                  <div className="crypto-icons">
                    <span className="tether-icon">T</span>
                    <span className="bitcoin-icon">B</span>
                    <span className="eth-icon">E</span>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="continue-button" 
              disabled={parseFloat(amount.replace(/,/g, '')) < minAmount}
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

export default BuyPage;