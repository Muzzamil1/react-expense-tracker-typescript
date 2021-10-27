export type First = {
   transactions: {
      id: number;
      amount: number;
      remark: string;
      dateTime: string;
   }[];
};

export enum ActionKind {
   ADD_TRANSACTION = 'ADD_TRANSACTION',
   DELETE_TRANSACTION = 'DELETE_TRANSACTION',
   EDIT_TRANSACTION = 'EDIT_TRANSACTION',
}

// type Action = {
//    type: ActionKind;
//    payload: number;
// };

// export const addTransactionAction: Action = {
//    type: ActionKind.ADD_TRANSACTION,
//    payload: 1,
// };

// export const deleteTransactionAction: Action = {
//    type: ActionKind.DELETE_TRANSACTION,
//    payload: 1,
// };

export type Actions =
   | {
        type: ActionKind.ADD_TRANSACTION;
        payload: {
           id: number | any;
           amount: number;
           remark: string;
           dateTime: string;
        };
     }
   | {
        type: ActionKind.DELETE_TRANSACTION;
        payload: number;
     }
   | {
        type: ActionKind.EDIT_TRANSACTION;
        payload: {
           id: number | any;
           amount: number;
           remark: string;
           dateTime: string;
        };
     };
