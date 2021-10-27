import React from 'react';

import CashButtons from 'components/CashButtons';
import Header from 'components/Header';
import NetBalance from 'components/NetBalance';
import TransactionList from 'components/TransactionList';
import { GlobalState } from 'context/GlobalState';
import './App.css';

const App: React.FC = () => (
  <GlobalState>
    <div
      className='App'
    >
      <Header />

      <NetBalance />

      <TransactionList />

      <CashButtons />
    </div>
  </GlobalState>
);

export default App;
