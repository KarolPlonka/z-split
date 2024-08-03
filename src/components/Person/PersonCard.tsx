import React, {useState} from 'react';
import { Person } from './PersonType';

import './PersonCard.scss';


export const PersonCard: React.FC<{ person: Person, updatePerson: (index: number, updatedPerson: Person) => void }> = ({ person, updatePerson }) => {
    const updateName = (name: string) => {
        updatePerson(person.id, { ...person, name });
    };

    const updateContribution = (contribution: number) => {
        updatePerson(person.id, { ...person, contribution });
    }

    return (
        <div className="person-card">
            <input
                type="text"
                className='person-card__name'
                value={person.name}
                onChange={(e) => updateName(e.target.value)}
            />
            <input
                type="number"
                className='person-card__contribution'
                value={person.contribution}
                onChange={(e) => updateContribution(Number(e.target.value))}
            />
        </div>
    );
}


