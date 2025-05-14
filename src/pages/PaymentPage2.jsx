import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PaymentPage.scss';

const PaymentPage = ({ onBack, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState({ code: 'AMD', name: 'Armenian Dram' });
  

  useEffect(() => {
    if (location.state?.selectedCurrency) {
      setSelectedCurrency(location.state.selectedCurrency);
    }
  }, [location.state]);
  

  const operators = [
    {
      id: 'mercuryo',
      name: 'Mercuryo',
      rate: `2,330.01 ${selectedCurrency.code} for 1 TON`,
      best: true,
      icon: '/public/mercuryo.png'
    },
    {
      id: 'dreamwalkers',
      name: 'Dreamwalkers',
      rate: `2,470.01 ${selectedCurrency.code} for 1 TON`,
      best: false,
      icon: '/public/dreamwalkers.png'
    },
  ];

  const handleOperatorSelect = (operatorId) => {
    setSelectedOperator(operatorId);
  };

  const handleCurrencySelect = () => {
    navigate('/currency');
  };

  const handleContinue = () => {
    if (selectedOperator) {
      if (selectedOperator === 'mercuryo') {
        navigate('/mercuryo2', { 
          state: { 
            currency: selectedCurrency,
            amount: 1000,
            totalCost: 233001.01,
            rate: 2330.01
          } 
        });
      } else {
        console.log(`Continuing with operator: ${selectedOperator}`);
      }
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-modal">
        <div className="header">
          <button className="back-button" onClick={onBack}>
            <span>&#8592;</span>
          </button>
          <div className="page-title">Operator</div>
          <button className="close-button" onClick={onClose}>
            <span>&#10005;</span>
          </button>
        </div>

        <div className="content">
          <div className="upper-content">
            <div className="payment-method-type">
              Credit Card
            </div>
            
            <div className="currency-selector" onClick={handleCurrencySelect}>
              <div className="selected-currency">
                <span>{selectedCurrency.code}</span> {selectedCurrency.name}
                <span className="dropdown-icon">&#9662;</span>
              </div>
            </div>
            
            <div className="operators-list">
              {operators.map((operator) => (
                <div
                  key={operator.id}
                  className={`operator-item ${selectedOperator === operator.id ? 'selected' : ''}`}
                  onClick={() => handleOperatorSelect(operator.id)}
                >
                  <div className="operator-left">
                    <div className="radio-button">
                      {selectedOperator === operator.id && <div className="radio-inner"></div>}
                    </div>
                    <div className="operator-icon">
                      <img src={operator.icon} alt={operator.name} />
                    </div>
                    <div className="operator-info">
                      <div className="operator-name">
                        {operator.name}
                        {operator.best && <span className="best-badge">BEST</span>}
                      </div>
                      <div className="operator-rate">{operator.rate}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="continue-button"
            disabled={!selectedOperator}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;