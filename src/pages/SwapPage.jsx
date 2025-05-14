import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './SwapPage.scss';

const SwapPage = ({ onClose, onConfirm, onChooseToken }) => {
  const location = useLocation();
  const [sendAmount, setSendAmount] = useState('0');
  const [receiveAmount, setReceiveAmount] = useState('0');
  const [sendToken, setSendToken] = useState({
    symbol: 'TON',
    name: 'Toncoin',
    balance: '100,000.01',
    value: '$601,000.01',
    icon: '🔹'
  });
  const [receiveToken, setReceiveToken] = useState(null);

  useEffect(() => {
    if (location.state?.selectedToken && location.state?.tokenType) {
      const token = location.state.selectedToken;
      const tokenType = location.state.tokenType;
      
      console.log('Selected token:', token, 'for', tokenType);
      
      if (tokenType === 'send') {
        setSendToken(token);
      } else if (tokenType === 'receive') {
        setReceiveToken(token);
      }
    }
  }, [location.state]);

  const handleMaxClick = () => {
    setSendAmount(sendToken.balance?.replace(/,/g, '') || '0');
  };

  const handleKeyPress = (value) => {
    if (value === 'delete') {
      setSendAmount(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
      return;
    }
    
    if (value === '.') {
      if (sendAmount.includes('.')) return;
      setSendAmount(prev => prev + '.');
      return;
    }

    setSendAmount(prev => {
      if (prev === '0') return value;
      return prev + value;
    });
  };

  const handleTokenSwap = () => {
    if (!receiveToken) return;
    
    const tempToken = sendToken;
    const tempAmount = sendAmount;

    setSendToken(receiveToken);
    setSendAmount(receiveAmount);

    setReceiveToken(tempToken);
    setReceiveAmount(tempAmount);
  };

  const handleChooseSendToken = () => {
    if (onChooseToken) {
      onChooseToken('send');
    }
  };

  const handleChooseReceiveToken = () => {
    if (onChooseToken) {
      onChooseToken('receive');
    }
  };

  useEffect(() => {
    if (!sendToken || !receiveToken) {
      setReceiveAmount('0');
      return;
    }

    const sendSymbol = sendToken.symbol;
    const receiveSymbol = receiveToken.symbol;

    if (sendSymbol === 'TON' && receiveSymbol === 'USDT') {
      setReceiveAmount((parseFloat(sendAmount || 0) * 6.01).toFixed(2));
    } else if (sendSymbol === 'USDT' && receiveSymbol === 'TON') {
      setReceiveAmount((parseFloat(sendAmount || 0) / 6.01).toFixed(2));
    } else {
      setReceiveAmount(sendAmount);
    }
  }, [sendAmount, sendToken, receiveToken]);

  const handleEnterAmount = () => {
    if (receiveToken && parseFloat(sendAmount) > 0 && onConfirm) {
      onConfirm({
        sendToken,
        receiveToken,
        sendAmount,
        receiveAmount
      });
    }
  };

  return (
    <div className="swap-page-exact">
      <div className="swap-container">
        <div className="swap-header">
          <div className="swap-icon">⇄</div>
          <div className="swap-title">Swap</div>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>

        <div className="swap-body">
          <div className="swap-section send-section">
            <div className="section-header">
              <div className="section-label">Send</div>
              <div className="balance-info">
                <span className="balance-text">Balance: {sendToken.balance || '0'}</span>
                <button className="max-button" onClick={handleMaxClick}>MAX</button>
              </div>
            </div>

            <div className="token-and-amount">
              <button className="token-selector" onClick={handleChooseSendToken}>
                <div className="token-icon">
                  <span className="token-symbol">{sendToken.icon || '◆'}</span>
                </div>
                <div className="token-name">{sendToken.symbol || 'CHOOSE'}</div>
              </button>
              <div className="amount-display">{sendAmount}</div>
            </div>
          </div>

          <div className="swap-button-container">
            <button className="swap-button" onClick={handleTokenSwap} disabled={!receiveToken}>
              <span className="swap-arrows">⇅</span>
            </button>
          </div>

          <div className="swap-section receive-section">
            <div className="section-label">Receive</div>
            <div className="token-and-amount">
              <button className="choose-token" onClick={handleChooseReceiveToken}>
                {receiveToken ? (
                  <div className="token-display">
                    <span className="token-icon">{receiveToken.icon || '◆'}</span>
                    <span>{receiveToken.symbol}</span>
                  </div>
                ) : (
                  'CHOOSE'
                )}
              </button>
              <div className="amount-display">{receiveAmount}</div>
            </div>
          </div>

          <div className="action-button-container">
            <button 
              className="action-button"
              onClick={handleEnterAmount}
              disabled={!receiveToken || parseFloat(sendAmount) <= 0}
            >
              {!receiveToken ? 'Select a token' : parseFloat(sendAmount) <= 0 ? 'Enter Amount' : 'Review Swap'}
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
            <button className="key" onClick={() => handleKeyPress('.')}>.
            </button>
            <button className="key" onClick={() => handleKeyPress('0')}>0
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

export default SwapPage;