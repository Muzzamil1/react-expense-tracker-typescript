import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { UserContext } from 'context/GlobalState';

import { Transaction } from './Transaction';

const useStyles = makeStyles({
  root: {
    maxHeight: '20rem',
    overflow: 'auto',
  },
  text: {
    color: '#a452eb',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '1rem 0'
  }
});

const TransactionList = () => {
  const { state } = useContext(UserContext);

  const { transactions } = state;

  const classes = useStyles();

  return (
    <>
      {transactions.length === 0 && (
        <h4
          className={classes.text}
        >Use Cash In/ Cash Out to add your first entry</h4>
      )}

      <div
        className={classes.root}
      >
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            {...transaction}
          />
        ))}
      </div>
    </>
  );
};

export default TransactionList;
