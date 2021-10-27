import { useContext } from 'react';

import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { UserContext } from 'context/GlobalState';

const useStyles = makeStyles({
  card: {
    maxWidth: '100% !important',
    padding: '0.5rem 1rem',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'stretch',
    '& h3': {
      marginBottom: '0.6rem',
    },
  },
  totalIn: {
    marginTop: '.4rem',
    '& h5:nth-of-type(even)': {
      color: '#31a30e',
    },
  },
  totalOut: {
    marginTop: '0.4rem',
    '& h5:nth-of-type(even)': {
      color: '#b90b22',
    },
  },
});

// interface Props {
//   children: React.ReactNode;
// }

// const NetBalance = ({ children }: Props) => {
const NetBalance = () => {
  const classes = useStyles();

  const { state } = useContext(UserContext);

  const { transactions } = state;

  const amount = transactions.map((transaction) => transaction.amount);

  const initial = 0;

  const totalIn = Number(
    amount
      .filter((items) => items > 0)
      .reduce((previous, current) => (previous += current), initial)
      .toFixed(2),
  );

  const totalOut = Number(
    (
      amount
        .filter((items) => items < 0)
        .reduce((previous, current) => (previous += current), initial) * 1
    ).toFixed(2),
  );

  return (
    <Paper
      elevation={3}
      className={classes.card}
    >
      <div
        className={classes.flex}
      >
        <h3>Net Balance</h3>

        <h3> {totalIn + totalOut}</h3>
      </div>

      <Divider />

      <div
        className={`${classes.flex} ${classes.totalIn}`}
      >
        <h5>Total In (+)</h5>

        <h5> {totalIn}</h5>
      </div>

      <div
        className={`${classes.flex} ${classes.totalOut}`}
      >
        <h5>Total Out (-)</h5>

        <h5> {totalOut}</h5>
      </div>
    </Paper>
  );
};

export default NetBalance;