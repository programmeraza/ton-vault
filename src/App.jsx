import React, { useState } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
  useNavigate, 
  useLocation 
} from 'react-router-dom';
import Balance from './components/Balance/Balance';
import StakePage from './pages/StakePage';
import DepositPage from './pages/DepositPage';
import SwapPage from './pages/SwapPage';
import ConfirmPage from './pages/ConfirmPage';
import ChooseTokenPage from './pages/ChooseTokenPage';
import BuyPage from './pages/BuyPage';
import PaymentPage from './pages/PaymentPage';
import PaymentPage2 from './pages/PaymentPage2';
import Currencypage from './pages/Currencypage';
import MercuryoPage from './pages/MercuryoPage';
import MercuryoPage2 from './pages/MercuryoPage2';
import SellPage from './pages/SellPage';
import Header from './components/Header/Header';
import OptionsPage from './pages/OptionsPage';
import './App.css';

const StakePageWithNavigation = () => {
  const navigate = useNavigate();
  
  const goToOptions = () => {
    navigate('/options');
  };
  
  const goToDeposit = (stakeData) => {
    navigate('/deposit', { state: stakeData });
  };
  
  return <StakePage onTonstakersClick={goToOptions} onContinueClick={goToDeposit} />;
};

const OptionsPageWithNavigation = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToWallet = () => {
    navigate('/wallet');
  };
  
  return <OptionsPage onBack={goBack} onClose={goToWallet} />;
};

const DepositPageWithNavigation = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToWallet = () => {
    navigate('/wallet');
  };
  
  return <DepositPage onBack={goBack} onClose={goToWallet} />;
};

const BuyPageWithNavigation = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToWallet = () => {
    navigate('/wallet');
  };
  
  const goToPayment = (buyData) => {
    navigate('/payment', { state: buyData });
  };
  
  return <BuyPage onBack={goBack} onClose={goToWallet} onContinue={goToPayment} />;
};

const SellPageWithNavigation = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToWallet = () => {
    navigate('/wallet');
  };
  
  return <SellPage onBack={goBack} onClose={goToWallet} />;
};

const PaymentPageWithNavigation = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToWallet = () => {
    navigate('/wallet');
  };
  
  return <PaymentPage onBack={goBack} onClose={goToWallet} />;
};

const PaymentPage2WithNavigation = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToWallet = () => {
    navigate('/wallet');
  };
  
  return <PaymentPage2 onBack={goBack} onClose={goToWallet} />;
};

const MercuryoPageWithNavigation = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToWallet = () => {
    navigate('/wallet');
  };
  
  return <MercuryoPage onBack={goBack} onClose={goToWallet} />;
};

const MercuryoPage2WithNavigation = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToWallet = () => {
    navigate('/wallet');
  };
  
  return <MercuryoPage2 onBack={goBack} onClose={goToWallet} />;
};

const CurrencyPageWithNavigation = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToWallet = () => {
    navigate('/wallet');
  };
  
  return <Currencypage onBack={goBack} onClose={goToWallet} />;
};

const SwapPageWithNavigation = () => {
  const navigate = useNavigate();
  const [currentTokenType, setCurrentTokenType] = useState('');
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToConfirm = (swapData) => {
    navigate('/confirm-swap', { state: swapData });
  };
  
  const goToChooseToken = (tokenType) => {
    setCurrentTokenType(tokenType);
    navigate('/choose-token', { state: { tokenType } });
  };
  
  return <SwapPage onClose={goBack} onConfirm={goToConfirm} onChooseToken={goToChooseToken} />;
};

const ConfirmPageWithNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const swapDetails = location.state;
  
  const goBack = () => {
    navigate(-1);
  };
  
  const goToWallet = () => {
    navigate('/wallet');
  };
  
  const handleConfirm = () => {
    setTimeout(() => {
      navigate('/wallet');
    }, 1500); 
  };
  
  return (
    <ConfirmPage 
      onClose={goToWallet} 
      onCancel={goBack} 
      onConfirm={handleConfirm}
      swapDetails={swapDetails || {
        sendToken: {
          symbol: 'TON',
          icon: '/assets/icons/ton.svg',
        },
        receiveToken: {
          symbol: 'USDT',
          icon: '/assets/icons/usdt.svg',
        },
        sendAmount: 14787.32,
        receiveAmount: 6010.01,
        priceImpact: '0.001%',
        minimumReceived: '6,000.01 USDT',
        liquidityProviderFee: '0.0000001 USDT',
        blockchainFee: '0.11 - 0.17 TON',
        route: 'TON » USDT',
        provider: 'STON.fi'
      }}
    />
  );
};

const ChooseTokenPageWithNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const goBack = () => {
    navigate(-1);
  };
  
  const handleTokenSelect = (token) => {
    const tokenType = location.state?.tokenType || sessionStorage.getItem('currentTokenType') || 'receive';
    
    navigate('/swap', { 
      state: {
        selectedToken: token,
        tokenType: tokenType
      }
    });
  };
  
  React.useEffect(() => {
    if (location.state?.tokenType) {
      sessionStorage.setItem('currentTokenType', location.state.tokenType);
    }
  }, [location.state]);
  
  return <ChooseTokenPage onClose={goBack} onTokenSelect={handleTokenSelect} />;
};

const AppLayout = () => {
  const location = useLocation();
  const showHeader = location.pathname !== '/stake' && 
                     location.pathname !== '/options' && 
                     location.pathname !== '/deposit' &&
                     location.pathname !== '/swap' &&
                     location.pathname !== '/choose-token' &&
                     location.pathname !== '/confirm-swap' &&
                     location.pathname !== '/buysell' &&
                     location.pathname !== '/payment' &&
                     location.pathname !== '/currency' &&
                     location.pathname !== '/mercuryo' &&
                     location.pathname !== '/sell' &&
                     location.pathname !== '/mercuryo2' &&
                     location.pathname !== '/payment2'
  
  return (
    <div className="app">
      <Routes>
        <Route path="/wallet" element={<Balance />} />
        <Route path="/stake" element={<StakePageWithNavigation />} />
        <Route path="/options" element={<OptionsPageWithNavigation />} />
        <Route path="/deposit" element={<DepositPageWithNavigation />} />
        <Route path="/swap" element={<SwapPageWithNavigation />} />
        <Route path="/buysell" element={<BuyPageWithNavigation />} />
        <Route path="/sell" element={<SellPageWithNavigation />} />
        <Route path="/payment" element={<PaymentPageWithNavigation />} />
        <Route path="/payment2" element={<PaymentPage2WithNavigation />} />
        <Route path="/currency" element={<CurrencyPageWithNavigation />} />
        <Route path="/mercuryo" element={<MercuryoPageWithNavigation />} />
        <Route path="/mercuryo2" element={<MercuryoPage2WithNavigation />} />
        <Route path="/confirm-swap" element={<ConfirmPageWithNavigation />} />
        <Route path="/choose-token" element={<ChooseTokenPageWithNavigation />} />
        <Route path="/" element={<Navigate to="/wallet" replace />} />
      </Routes>
      {showHeader && <Header />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;