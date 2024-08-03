import React, {useState} from 'react';
import { Person } from './PersonType';

import './PersonCard.scss';


export const PersonCard: React.FC<{ person: Person }> = ({ person }) => {
    const [name, setName] = useState(person.name);
    const [contribution, setContribution] = useState(person.contribution);

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        person.name = e.target.value;
        setName(e.target.value);
    }

    const onContributionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        person.contribution = Number(e.target.value);
        setContribution(Number(e.target.value));
    }

    return (
        <div className="person-card">
            <input
                type="text"
                className='person-card__name'
                value={name}
                onChange={onNameChange}
            />
            <input
                type="number"
                className='person-card__contribution'
                value={contribution}
                onChange={onContributionChange}
            />
        </div>
    );
}


