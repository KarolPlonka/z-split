import React, {useState} from 'react';
import logo from './logo.svg';
import './assets/scss/_base.scss';

import './App.scss';

import { Debt, CalculatedDebts } from './components/Debt/DebtType';
import { Person } from './components/Person/PersonType';

import { settleUp } from './debtsSettler';
import { PersonsContainer } from './components/Person/PersonsContainer';
import { DebtsContainer } from './components/Debt/DebtsContainer';

import { DungeonSeparator } from './components/Shared/DungeonSeparator';

function App() {
    const [calculatedDebts, setCalculatedDebts] = useState<CalculatedDebts | null>(null);

    // PROD
    let defaultPersons: Person[] = [
        { id: 0, name: 'David', contribution: 0 },
        { id: 1, name: 'Elijah', contribution: 0 },
    ]

    // DEBUG
    // let defaultPersons: Person[] = [
    //     { id: 0, name: 'David', contribution: 50 },
    //     { id: 1, name: 'Elijah', contribution: 30 },
    // ];

    const [persons, setPersons] = useState(defaultPersons);


    const settleUpDebts = () => {
        const calculatedDebts = settleUp(persons);
        setCalculatedDebts(calculatedDebts);
    }

    return (
        <div className="App">
            <h1 className='header'>Ż-SPLIT</h1>
            <PersonsContainer persons={persons} setPersons={setPersons} />

            <DungeonSeparator />

            <button
                className='settle-up-debts-button'
                onClick={settleUpDebts}
            >
                Settle Up Debts
            </button>

            <DungeonSeparator />

            {calculatedDebts && <DebtsContainer calculatedDebts={calculatedDebts} />}

            {/* <DungeonSeparator /> */}

            {/* <button onClick={() => console.log({persons})}>Log persons</button> */}
        </div>
    );
}

export default App;
