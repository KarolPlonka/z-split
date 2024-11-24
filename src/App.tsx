import React, {useState} from 'react';
import './assets/scss/_base.scss';

import './App.scss';

import { CalculatedDebts } from './components/Debt/DebtType';
import { Person } from './components/Person/PersonType';

import { settleUp } from './debtsSettler';

import { PersonsContainer } from './components/Person/PersonsContainer';
import { SettleUpInfo } from './components/SettleUpInfo/DebtsContainer';
import { DungeonSeparator } from './components/Shared/DungeonSeparator';

function App() {

    // PROD
    let defaultPersons: Person[] = [
        { id: 0, name: 'David', contribution: 0, debts: [], areDebtsSettled: false },
        { id: 1, name: 'Elijah', contribution: 0, debts: [], areDebtsSettled: false },
    ]

    // DEBUG
    // let defaultPersons: Person[] = [
    //     { id: 0, name: 'David', contribution: 50, debts: [], areDebtsSettled: false },
    //     { id: 1, name: 'Elijah', contribution: 30, debts: [], areDebtsSettled: false },
    // ];
    // defaultPersons[1].debts = [
    //     { lender: defaultPersons[0], amount: 10 }
    // ];

    const [persons, setPersons] = useState(defaultPersons);

    const [calculatedDebts, setCalculatedDebts] = useState<CalculatedDebts|null>(null);

    const settleUpDebtsForCurrentPersonsState = () => {
        persons.forEach(person => {
            person.debts = [];
            person.areDebtsSettled = false;
        });
        const calculatedDebts: CalculatedDebts = settleUp(persons);
        setCalculatedDebts(calculatedDebts);
    }

    return (
        <div className="App">
            <h1 className='header'>Ż-SPLIT</h1>
            <PersonsContainer persons={persons} setPersons={setPersons} />

            <DungeonSeparator />

            <button
                className='settle-up-debts-button'
                onClick={settleUpDebtsForCurrentPersonsState}
            >
                Settle Up Debts
            </button>

            <DungeonSeparator />

            {calculatedDebts &&
            <SettleUpInfo
                costPerPerson={calculatedDebts.costPerPerson}
                unsettleableDebt={calculatedDebts.unsettleableDebt}
            />
            }
            {/* <DungeonSeparator /> */}

            {/* <button onClick={() => console.log({persons})}>Log persons</button> */}
        </div>
    );
}

export default App;
