/* eslint-disable @typescript-eslint/no-unused-expressions */

import React, { useState, useEffect, useCallback, useContext } from 'react';

import TextField from '@material-ui/core/TextField';
import SweetAlert from 'react-bootstrap-sweetalert';
import { SweetAlertRenderProps } from 'react-bootstrap-sweetalert/dist/types';

import cashInIcon from 'assets/cash-in-hand-icon-cartoon-style-vector.jpg';
import cashOutIcon from 'assets/cash-out.jpg';
import { ActionKind } from 'constant/types';
import { UserContext } from 'context/GlobalState';

import { TransactionType } from './Transaction';

export type ShowModelString =
  | ''
  | 'Cash In'
  | 'Cash Out'
  | 'Update Transaction';

interface Props {
  showModel: ShowModelString;
  handleModelAction: () => void;
  data?: TransactionType;
  edit?: boolean;
}

const TransactionModel = ({
  showModel,
  handleModelAction,
  data,
  edit,
}: Props) => {
  const { dispatch } = useContext(UserContext);

  const [alert, setAlert] = useState<React.ReactNode>();

  const [amount, setAmount] = useState<string>(data?.amount?.toString() || '');

  const [remark, setRemark] = useState<string>(data?.remark?.toString() || '');

  const defaultDateTime = data?.dateTime
    ? new Date(data?.dateTime)
    : new Date();

  const isoDateTime = new Date(defaultDateTime).toISOString().split('.')[0];

  const [dateTime, setDateTime] = useState<string>(isoDateTime);

  const handleClick = useCallback(() => {
    const setState = undefined;

    setAlert(setState);
    handleModelAction();

    if (amount && remark && dateTime) {
      edit
        ? dispatch({
          type: ActionKind.EDIT_TRANSACTION,
          payload: {
            id: data?.id || 0,
            amount: Number(amount),
            remark,
            dateTime,
          },
        })
        : dispatch({
          type: ActionKind.ADD_TRANSACTION,
          payload: {
            id: Math.floor(Math.random() * 10_000),
            amount:
              showModel == 'Cash In'
                ? Number(amount)
                : Number(-amount),
            remark,
            dateTime,
          },
        });
    }
  }, [
    amount,
    data?.id,
    dateTime,
    dispatch,
    edit,
    handleModelAction,
    remark,
    showModel,
  ]);

  useEffect(() => {
    showModel != ''
      ? setAlert(
        <SweetAlert
          custom
          title={showModel}
          confirmBtnCssClass='btn-primary'
          cancelBtnCssClass='btn-cancel'
          showCancel
          showCloseButton
          confirmBtnText={edit ? 'Update' : 'Save'}
          onConfirm={handleClick}
          onCancel={handleClick}
          customIcon={
            showModel != 'Update Transaction' &&
            (showModel == 'Cash In' ? cashInIcon : cashOutIcon)
          }
          // type={'controlled'}
          dependencies={[amount, remark, dateTime]}
        >
          {(renderProps: SweetAlertRenderProps) => (
            <form
              noValidate
              autoComplete='off'
            >
              <TextField
                id='amount'
                label='Amount'
                type='number'
                variant='outlined'
                size='small'
                fullWidth
                defaultValue={amount}
                inputRef={renderProps.setAutoFocusInputRef}
                onKeyDown={renderProps.onEnterKeyDownConfirm}
                onChange={(e) => setAmount(e.target.value)}
              />

              <TextField
                id='remark'
                label='Remark'
                type='string'
                variant='outlined'
                size='small'
                fullWidth
                style={{ marginTop: '1rem' }}
                defaultValue={remark}
                // inputRef={renderProps.setAutoFocusInputRef}
                onKeyDown={renderProps.onEnterKeyDownConfirm}
                onChange={(e) => setRemark(e.target.value)}
              />

              <TextField
                id='dateTime'
                label='Date Time'
                type='datetime-local'
                variant='outlined'
                size='small'
                fullWidth
                style={{ marginTop: '1rem' }}
                defaultValue={dateTime}
                // inputRef={renderProps.setAutoFocusInputRef}
                onKeyDown={renderProps.onEnterKeyDownConfirm}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </form>
          )}
        </SweetAlert>,
      )
      : null;

    return () => {
      // cleanup
    };
  }, [
    amount,
    dateTime,
    handleClick,
    handleModelAction,
    isoDateTime,
    remark,
    showModel,
  ]);

  return <>{alert}</>;
};

export default TransactionModel;
