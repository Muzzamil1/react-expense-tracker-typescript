import React, { useState, useContext, useEffect } from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit';

import { ActionKind } from 'constant/types';
import { UserContext } from 'context/GlobalState';

import TransactionModel, { ShowModelString } from './TransactionModel';

const useStyles = makeStyles({
  card: {
    padding: '0.5rem 1rem',
    margin: '0.5rem 1rem',
    // margin: '0.5rem 0',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'stretch',

  },
  cashIn: {
    color: '#31a30e',
  },
  cashOut: {
    color: '#b90b22',
  },
  dateTime: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '0.7rem',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
  },
});

export type TransactionType = {
  id: number;
  amount: number;
  remark: string;
  dateTime: string;
};

const formattedTimestamp = (parseDate: string | Date) => {
  const d = new Date(parseDate);

  const date = d.toISOString().split('T')[0];

  const time = d.toTimeString().split(' ')[0];

  return `${date} ${time}`;
};

export const Transaction: React.FC<TransactionType> = (props) => {
  const { dispatch } = useContext(UserContext);

  const [showModel, setShowModel] = useState<ShowModelString>('')

  const [editData, setEditData] = useState<TransactionType>();

  const classes = useStyles();

  const handleModelAction = () => {
    setShowModel('')
  }

  useEffect(() => {
    if (editData?.id)
      setShowModel('Update Transaction')

    // return () => {
    //   cleanup
    // }
  }, [editData])

  return (
    <>

      {showModel != '' && (
        <TransactionModel
          showModel={showModel}
          handleModelAction={handleModelAction}
          edit
          data={editData}
        />
      )}

      <Paper
        elevation={3}
        className={classes.card}
      >
        <div
          className={classes.flex}
        >
          <p >{props.remark}</p>

          <p
            className={props.amount > 0 ? classes.cashIn : classes.cashOut}
          // style={{ flexGrow: 1 }}
          >
            {props.amount}
          </p>

          <p >
            <Tooltip
              title='Edit'
              arrow
            >
              <Edit
                style={{
                  color: '#FFC107',
                  cursor: 'pointer',
                }}
                onClick={() => {

                  setEditData({ ...props })

                }}
              />
            </Tooltip>

            <Tooltip
              title='Delete'
              arrow
            >
              <DeleteForeverIcon
                style={{
                  color: '#E34724',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  dispatch({
                    type: ActionKind.DELETE_TRANSACTION,
                    payload: props.id
                  });
                }}
              />
            </Tooltip>
          </p>
        </div>

        <p
          className={classes.dateTime}
        >{formattedTimestamp(props.dateTime)}</p>

      </Paper>

    </>

  );
};
