import React, { useState } from 'react';
import { Person } from './PersonType';
import { PersonCard } from './PersonCard';

import './PersonsContainer.scss';

export const PersonsContainer: React.FC<{ persons: Person[] }> = ({ persons }) => {
    const [localPersons, setLocalPersons] = useState([...persons]);

    const addPerson = () => {
        const newPerson = {
            id: persons.length,
            name: '',
            contribution: 0,
        };
        persons.push(newPerson);
        setLocalPersons([...persons]);
        console.log(persons);
    };

    const removePerson = (index: number) => {
        persons.splice(index, 1);
        setLocalPersons([...persons]);
    }


    return (
        <div className='persons-container'>
            <div className='persons-container__persons-list'>
                {localPersons.map((person, i) => (
                    <div className='persons-container__person-card-container' key={i}>

                        <PersonCard person={person} />

                        <button
                            className='persons-container__remove-person-button' 
                            onClick={() => removePerson(i)}
                        >
                            Remove Person
                        </button>

                    </div>
                ))}
            </div>

            <button className='persons-container__add-person-button' onClick={addPerson}>Add Person</button>
        </div>
    );
};
