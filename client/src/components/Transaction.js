import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        <li className="minus">
            {transaction.id} - {transaction.text} - 
            <span>{transaction.amount}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}
