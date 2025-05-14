import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CurrencyPage.scss';

const CurrencyPage = ({ onBack, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCurrency, setSelectedCurrency] = useState('AMD');
  
  const currencies = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'RUB', name: 'Russian Ruble' },
    { code: 'AMD', name: 'Armenian Dram' },
    { code: 'GBP', name: 'United Kingdom Pound' },
    { code: 'CHF', name: 'Swiss Franc' },
    { code: 'CNY', name: 'China Yuan' },
    { code: 'KRW', name: 'South Korea Won' },
    { code: 'IDR', name: 'Indonesian Rupiah' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'JPY', name: 'Japanese Yen' }
  ];

  const handleCurrencySelect = (currencyCode) => {
    setSelectedCurrency(currencyCode);
    
    navigate(-1, { 
      state: { 
        selectedCurrency: currencies.find(c => c.code === currencyCode) 
      }
    });
  };

  return (
    <div className="currency-page">
      <div className="currency-modal">
        <div className="header">
          <div className="page-title">Currency</div>
          <button className="close-button" onClick={onClose}>
            <span>&#10005;</span>
          </button>
        </div>

        <div className="content">
          <div className="currencies-list">
            {currencies.map((currency) => (
              <div
                key={currency.code}
                className={`currency-item ${selectedCurrency === currency.code ? 'selected' : ''}`}
                onClick={() => handleCurrencySelect(currency.code)}
              >
                <div className="currency-code">{currency.code}</div>
                <div className="currency-name">{currency.name}</div>
                {selectedCurrency === currency.code && (
                  <div className="check-icon">✓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyPage;