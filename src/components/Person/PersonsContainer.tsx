import React, { useState } from 'react';
import { FiX, FiPlus } from "react-icons/fi";

import { Person } from './PersonType';
import { PersonCard } from './PersonCard';
import './PersonsContainer.scss';

export const PersonsContainer: React.FC<{ persons: Person[], setPersons: (persons: Person[]) => void }> = ({ persons, setPersons }) => {
    // const [localPersons, setLocalPersons] = useState([...persons]);

    const addPerson = () => {
        const newPerson = {
            id: persons.length,
            name: 'person ' + persons.length.toString(),
            contribution: 0,
        };
        persons.push(newPerson);
        setPersons([...persons]);
        console.log(persons);

    };

    const removePerson = (index: number) => {
        persons.splice(index, 1);
        setPersons([...persons]);
    }

    const updatePerson = (index: number, updatedPerson: Person) => {
        persons[index] = updatedPerson;
        setPersons([...persons]);
    }



    return (
        <div className='persons-container'>
            <div className='persons-container__persons-list'>
                {persons.map((person, i) => (
                    <div className='persons-container__person-card-container' key={i}>

                        <PersonCard person={person} updatePerson={updatePerson} />

                        <button
                            className='persons-container__button-remove-person' 
                            onClick={() => removePerson(i)}
                        >
                            <FiX className='persons-container__button-remove-person__icon'/>
                        </button>

                    </div>
                ))}
            </div>

            <button className='persons-container__button-add-person' onClick={addPerson}>
                <FiPlus className='persons-container__button-add-person__icon'/>
            </button>
        </div>
    );
};
