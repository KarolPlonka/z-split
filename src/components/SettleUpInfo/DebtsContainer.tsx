import React from 'react';

export const SettleUpInfo: React.FC<{ costPerPerson: number, unsettleableDebt: number }> = ({ costPerPerson, unsettleableDebt }) => {
    return (
        <div className='settle-up-info'>
            <div className='settle-up-info__cost-per-person'>Cost per person: {costPerPerson}</div>
            <div className='settle-up-info__unsettleable-debt'>Unsettleable debt: {unsettleableDebt}</div>
        </div>
    );
}

