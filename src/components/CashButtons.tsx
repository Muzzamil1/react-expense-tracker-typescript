import { useState } from 'react';

import { Button } from '@material-ui/core';

import TransactionModel, { ShowModelString } from './TransactionModel';

const CashButtons = () => {
  // const [showModel, setShowModel] = useState<ShowModelString>('')
  const [showModel, setShowModel] = useState<ShowModelString>('');

  const handleModelAction = () => {
    setShowModel('');
  };

  return (
    <div className='App-buttons'>
      {showModel != '' && (
        <TransactionModel
          showModel={showModel}
          handleModelAction={handleModelAction}
        />
      )}

      <Button
        style={{
          borderRadius: 5,
          backgroundColor: '#31a30e',
          padding: '0.2rem .5rem',
          color: 'white',
        }}
        variant='contained'
        onClick={() => setShowModel('Cash In')}
      >
        + Cash In
      </Button>

      <Button
        style={{
          borderRadius: 5,
          backgroundColor: '#b90b22',
          padding: '0.2rem .5rem',
          color: 'white',
        }}
        variant='contained'
        onClick={() => setShowModel('Cash Out')}
      >
        - Cash Out
      </Button>
    </div>
  );
};

export default CashButtons;
