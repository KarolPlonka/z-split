import React, {useState} from 'react';
import { FiX } from "react-icons/fi";
import { Person } from './PersonType';
import './PersonCard.scss';
import { SpinningCoin } from '../Shared/SpinningCoin';

interface PersonCardProps {
  person: Person;
  updatePerson: (index: number, updatedPerson: Person) => void;
  onRemove: (id: number) => void;
}

type Contribution = {
    amount: number;
    name: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({
  person,
  updatePerson,
  onRemove
}) => {
    const updateName = (name: string) => {
        updatePerson(person.id, { ...person, name });
    };

    const updateContribution = (contributionRaw: number|'') => {
        const contribution = Number(contributionRaw) || 0;
        updatePerson(person.id, { ...person, contribution });
    }

    // This allows the input to be empty
    const [rawContribution, setRawContribution] = useState<string>(person.contribution.toString());
    const [rawAddedContribution, setRawAddedContribution] = useState<string>('');

    const [contributions, setContributions] = useState<Contribution[]>([]);

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
                            value={rawContribution}
                            onChange={(e) => {
                                const contribution = Number(e.target.value) || 0;
                                if (contributions.length > 0) {
                                    const confirmed = window.confirm('Reset existing contributions?');
                                    if (!confirmed) {
                                        return;
                                    }
                                }

                                setRawContribution(e.target.value);
                                updateContribution(contribution);
                                setContributions([]);
                            }}
                        />


                    </div>

                    <label className="person-card__input-label" htmlFor={`add-contribution-${person.id}`}>
                        <input
                            id={`add-contribution-${person.id}`}
                            type="number"
                            className="person-card__input person-card__input--contribution"
                            value={rawAddedContribution}
                            onChange={(e) => setRawAddedContribution(e.target.value)}
                        />
                        <button
                            className="person-card__add-contribution"
                            onClick={() => {
                                const contributionToAdd = Number(rawAddedContribution) || 0;
                                if (contributionToAdd === 0) {
                                    return;
                                }
                                const newTotalContribution = contributions.reduce((acc, contribution) => acc + contribution.amount, 0) + contributionToAdd;
                                setContributions([...contributions, { amount: contributionToAdd, name: '' }]);
                                updateContribution(newTotalContribution);
                                setRawAddedContribution('');
                                setRawContribution(newTotalContribution.toString());
                            }}
                        >
                            Add gold:
                        </button>
                    </label>

                    <ul className="person-card__contributions-list">
                        {contributions.map((contribution, i) => (
                            <li key={i} className="person-card__contribution">
                                {contribution.amount}
                                <SpinningCoin size="small" />
                                <input
                                    type="text"
                                    className="person-card__input person-card__input--contribution-name"
                                    placeholder="contribution name"
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {person.debts.length > 0 && (
                <div className="person-card__debts">
                    <ul className="person-card__debts-list">
                        {person.debts.map((debt, i) => (
                            <li key={i} className="person-card__debt">
                                Owes {debt.lender.name} {debt.amount}
                                <SpinningCoin size="small" />
                            </li>
                        ))}
                    </ul>
                </div>
                )}
                        
            </div>
        </div>
    );
}
