import React from 'react';
import { FiPlus } from "react-icons/fi";
import { Person } from './PersonType';
import { PersonCard } from './PersonCard';
import './PersonsContainer.scss';

export const PersonsContainer: React.FC<{
    persons: Person[],
    setPersons: (persons: Person[]) => void
}> = ({ persons, setPersons }) => {
    const addPerson = () => {
        const newPerson = {
            id: persons.length,
            name: `Adventurer ${persons.length + 1}`,
            contribution: 0,
        };
        setPersons([...persons, newPerson]);
    };

    const removePerson = (id: number) => {
        const newPersons = persons.filter(person => person.id !== id);
        setPersons(newPersons);
    }

    const updatePerson = (index: number, updatedPerson: Person) => {
        const newPersons = [...persons];
        newPersons[index] = updatedPerson;
        setPersons(newPersons);
    }

    return (
        <div className='persons-container'>
            <div className='persons-container__persons-list'>
                {persons.map((person, i) => (
                    <PersonCard
                        key={person.id}
                        person={person}
                        updatePerson={updatePerson}
                        onRemove={removePerson}
                    />
                ))}
            </div>

            <button className='persons-container__button-add-person' onClick={addPerson}>
                <FiPlus className='persons-container__button-add-person__icon'/>
            </button>
        </div>
    );
};
