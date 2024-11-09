import React from 'react';
import { FiX } from "react-icons/fi";
import { Person } from './PersonType';
import './PersonCard.scss';
import { SpinningCoin } from '../Shared/SpinningCoin';

interface PersonCardProps {
  person: Person;
  updatePerson: (index: number, updatedPerson: Person) => void;
  onRemove: (id: number) => void;
}

export const PersonCard: React.FC<PersonCardProps> = ({
  person,
  updatePerson,
  onRemove
}) => {
    const updateName = (name: string) => {
        updatePerson(person.id, { ...person, name });
    };

    const updateContribution = (contribution: number) => {
        updatePerson(person.id, { ...person, contribution });
    }

    return (
        <div className="person-card">
            <button
                className="person-card__remove"
                onClick={() => onRemove(person.id)}
                aria-label="Remove character"
            >
                <FiX className="person-card__remove-icon"/>
            </button>

            <div className="person-card__content">
                <div className="person-card__sprite-container">
                    <div className="person-card__sprite">
                        <div className="person-card__frame" />
                    </div>
                </div>

                <div className="person-card__inputs">
                    <div className="person-card__name-container">
                        <input
                            type="text"
                            className="person-card__input person-card__input--name"
                            value={person.name}
                            onChange={(e) => updateName(e.target.value)}
                            placeholder="Character name"
                        />
                    </div>

                    <div className="person-card__contribution">
                        <SpinningCoin size="small" />
                        <label className="person-card__input-label" htmlFor={`contribution-${person.id}`}>
                            Gold:
                        </label>
                        <input
                            id={`contribution-${person.id}`}
                            type="number"
                            className="person-card__input person-card__input--contribution"
                            value={person.contribution}
                            onChange={(e) => updateContribution(Number(e.target.value))}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
