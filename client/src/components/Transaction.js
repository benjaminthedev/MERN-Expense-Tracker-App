import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) => {

    const { deleteTransaction } = useContext(GlobalContext);


    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            Transaction ID: {transaction.id} <br />
            Transactions Desc: {transaction.text}<br />            
            Amount: {sign}£{Math.abs(transaction.amount)}
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    );
}
