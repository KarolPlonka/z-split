import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import './assets/scss/_shared.scss';

import { Debt, CalculatedDebts } from './components/Debt/DebtType';
import { Person } from './components/Person/PersonType';

import { settleUp } from './debtsSetteler';
import { PersonsContainer } from './components/Person/PersonsContainer';
import { DebtsContainer } from './components/Debt/DebtsContainer';


function App() {
    const [calculatedDebts, setCalculatedDebts] = useState<CalculatedDebts | null>(null);

    // PROD
    // let defaultPersons: Person[] = [
    //     { id: 0, name: 'David', contribution: 0 },
    //     { id: 1, name: 'Elijah', contribution: 0 },
    // ]
    
    // DEBUG
    let defaultPersons: Person[] = [
        { id: 0, name: 'David', contribution: 50 },
        { id: 1, name: 'Elijah', contribution: 30 },
        { id: 2, name: 'chuj', contribution: 0 },
        { id: 3, name: 'dupa', contribution: 0 },
        { id: 4, name: 'cipa', contribution: 0 },
    ];

    const [persons, setPersons] = useState(defaultPersons);


    const settleUpDebts = () => {
        const calculatedDebts = settleUp(persons);
        setCalculatedDebts(calculatedDebts);
    }

    return (
        <div className="App">
            <h1>Ż-SPLIT</h1>
            <PersonsContainer persons={persons} setPersons={setPersons} />

            <hr />

            <button
                className='settle-up-debts-button'
                onClick={settleUpDebts}            
            >
                Settle Up Debts
            </button>

            <hr />

            {calculatedDebts && <DebtsContainer calculatedDebts={calculatedDebts} />}

            
            <hr />
            <button onClick={() => console.log({persons})}>Log persons</button>
        </div>
    );
}

export default App;
