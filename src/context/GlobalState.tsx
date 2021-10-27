import React, { useReducer, Dispatch } from 'react';

import { First, Actions, ActionKind } from 'constant/types';

const initialState: First = {
  transactions: [
    // {
    //   id: 1,
    //   remark: 'Flower',
    //   amount: -20,
    //   dateTime: new Date().toLocaleDateString(),
    // },
    // {
    //   id: 2,
    //   remark: 'Salary',
    //   amount: 300,
    //   dateTime: new Date().toLocaleDateString(),
    // },
    // {
    //   id: 3,
    //   remark: 'Book',
    //   amount: -10,
    //   dateTime: new Date().toLocaleDateString(),
    // },
    // {
    //   id: 4,
    //   remark: 'Camera',
    //   amount: 150,
    //   dateTime: new Date().toLocaleDateString(),
    // },
  ],
};

export const UserContext = React.createContext<{
  state: First;
  dispatch: Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null });
const reducer = (state: First, action: Actions) => {
  switch (action.type) {
    case ActionKind.ADD_TRANSACTION:

      return {
        ...state,
        transactions: [
          {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            id: action.payload.id,
            remark: action.payload.remark,
            amount: action.payload.amount,
            dateTime: action.payload.dateTime,
          },
          ...state.transactions,
        ],
      };

    case ActionKind.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload,
        ),
      };

    case ActionKind.EDIT_TRANSACTION:

      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => {

            if (transaction.id == action.payload.id) {

              transaction.amount = action.payload.amount;
              transaction.remark = action.payload.remark;
              transaction.dateTime = action.payload.dateTime;

            }

            return true
          },
        ),
      };

    default:
      return state;
  }
};

interface Props {
  children: React.ReactNode;
}
export const GlobalState = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </UserContext.Provider>
  );
};
