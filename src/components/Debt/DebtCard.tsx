import React from 'react';
import { Debt } from './DebtType';

export const DebtCard: React.FC<{ debt: Debt }> = ({ debt }) => {
    return(
        <div className='debt-card'>
            {debt.borrower.name} owes {debt.lender.name} {debt.amount}
        </div>
    );
}

            // <div classname='debt-card__borrower'>borrower: {debt.borrower.name}</div>
            // <div className='debt-card__lender'>Lender: {debt.lender.name}</div>
            // <div className='debt-card__amount'>Amount: {debt.amount}</div>
